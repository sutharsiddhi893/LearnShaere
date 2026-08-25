import { useRef, useState } from "react";
import "./CodeEditor.css";

/* =========================================================
   LANGUAGE EDITOR CONFIGURATION
========================================================= */

const editorConfigurations = {
  c: {
    theme: "turbo-c",
    productName: "Turbo C",
    fileName: "PROGRAM.C",
    extension: "c",
  },

  cpp: {
    theme: "turbo-c",
    productName: "Turbo C++",
    fileName: "PROGRAM.CPP",
    extension: "cpp",
  },

  "c++": {
    theme: "turbo-c",
    productName: "Turbo C++",
    fileName: "PROGRAM.CPP",
    extension: "cpp",
  },

  python: {
    theme: "python",
    productName: "Python Studio",
    fileName: "main.py",
    extension: "py",
  },

  javascript: {
    theme: "javascript",
    productName: "JavaScript Studio",
    fileName: "app.js",
    extension: "js",
  },

  react: {
    theme: "javascript",
    productName: "React Studio",
    fileName: "App.jsx",
    extension: "jsx",
  },

  html: {
    theme: "html",
    productName: "Web Studio",
    fileName: "index.html",
    extension: "html",
  },

  css: {
    theme: "css",
    productName: "Web Studio",
    fileName: "style.css",
    extension: "css",
  },

  java: {
    theme: "java",
    productName: "Java IDE",
    fileName: "Main.java",
    extension: "java",
  },

  php: {
    theme: "php",
    productName: "PHP Studio",
    fileName: "index.php",
    extension: "php",
  },

  sql: {
    theme: "sql",
    productName: "SQL Console",
    fileName: "query.sql",
    extension: "sql",
  },

  bash: {
    theme: "terminal",
    productName: "Linux Terminal",
    fileName: "main.sh",
    extension: "sh",
  },

  r: {
    theme: "r-studio",
    productName: "RStudio",
    fileName: "analysis.R",
    extension: "R",
  },

  csharp: {
    theme: "dotnet",
    productName: "Visual Studio",
    fileName: "Program.cs",
    extension: "cs",
  },

  vbnet: {
    theme: "dotnet",
    productName: "Visual Basic Studio",
    fileName: "Program.vb",
    extension: "vb",
  },

  aspnet: {
    theme: "dotnet",
    productName: "ASP.NET Studio",
    fileName: "Default.aspx",
    extension: "aspx",
  },

  android: {
    theme: "android",
    productName: "Android Studio",
    fileName: "MainActivity.kt",
    extension: "kt",
  },

  arduino: {
    theme: "arduino",
    productName: "Arduino IDE",
    fileName: "sketch.ino",
    extension: "ino",
  },
};

const defaultEditorConfiguration = {
  theme: "default",
  productName: "LearnSphere Code Studio",
  fileName: "main.txt",
  extension: "txt",
};

function getEditorConfiguration(languageId) {
  return (
    editorConfigurations[String(languageId).toLowerCase()] ||
    defaultEditorConfiguration
  );
}

function getOutputState(output) {
  const normalizedOutput = String(output || "").toLowerCase();

  if (
    normalizedOutput.includes("compilation error") ||
    normalizedOutput.includes("runtime error") ||
    normalizedOutput.includes("execution error") ||
    normalizedOutput.includes("error:")
  ) {
    return "error";
  }

  if (
    normalizedOutput.includes("compiling") ||
    normalizedOutput.includes("executing") ||
    normalizedOutput.includes("running")
  ) {
    return "running";
  }

  return "success";
}

export default function CodeEditor({
  language,
  code,
  output,
  previewContent,
  onCodeChange,
  onRun,
  onReset,
}) {
  const lineNumbersRef = useRef(null);
  const textareaRef = useRef(null);

  const [copyMessage, setCopyMessage] = useState("Copy Code");
  const [cursorPosition, setCursorPosition] = useState({
    line: 1,
    column: 1,
  });

  const editorConfiguration = getEditorConfiguration(language.id);
  const outputState = getOutputState(output);

  const lineCount = Math.max(code.split("\n").length, 1);

  /* =======================================================
     COPY CODE
  ======================================================= */

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyMessage("Copied!");

      window.setTimeout(() => {
        setCopyMessage("Copy Code");
      }, 1600);
    } catch {
      setCopyMessage("Copy failed");
    }
  };

  /* =======================================================
     DOWNLOAD CODE
  ======================================================= */

  const handleDownload = () => {
    const file = new Blob([code], {
      type: "text/plain;charset=utf-8",
    });

    const fileUrl = URL.createObjectURL(file);
    const downloadLink = document.createElement("a");

    downloadLink.href = fileUrl;
    downloadLink.download = editorConfiguration.fileName;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    URL.revokeObjectURL(fileUrl);
  };

  /* =======================================================
     CURSOR POSITION
  ======================================================= */

  const updateCursorPosition = (textarea) => {
    const cursorIndex = textarea.selectionStart;
    const textBeforeCursor = textarea.value.slice(0, cursorIndex);
    const lines = textBeforeCursor.split("\n");

    setCursorPosition({
      line: lines.length,
      column: lines[lines.length - 1].length + 1,
    });
  };

  /* =======================================================
     EDITOR KEYBOARD SHORTCUTS
  ======================================================= */

  const handleEditorKeyDown = (event) => {
    const textarea = event.currentTarget;

    // Insert spaces when Tab is pressed.
    if (event.key === "Tab") {
      event.preventDefault();

      const indentation = "  ";
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;

      const updatedCode =
        code.slice(0, selectionStart) +
        indentation +
        code.slice(selectionEnd);

      onCodeChange(updatedCode);

      window.requestAnimationFrame(() => {
        textarea.selectionStart =
          textarea.selectionEnd =
            selectionStart + indentation.length;

        updateCursorPosition(textarea);
      });

      return;
    }

    // Ctrl + Enter or Command + Enter runs the code.
    if (
      event.key === "Enter" &&
      (event.ctrlKey || event.metaKey)
    ) {
      event.preventDefault();
      onRun();
    }
  };

  /* =======================================================
     SYNCHRONIZE LINE NUMBER SCROLL
  ======================================================= */

  const handleEditorScroll = (event) => {
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop =
        event.currentTarget.scrollTop;
    }
  };

  return (
    <section
      className="code-editor-section"
      data-editor-theme={editorConfiguration.theme}
      data-language={language.id}
    >
      <div className="code-editor-grid">
        {/* =================================================
            SOURCE CODE PANEL
        ================================================= */}

        <div className="code-editor-panel">
          {/* IDE title bar */}

          <div className="code-editor-window-titlebar">
            <div className="code-editor-window-buttons">
              <i></i>
              <i></i>
              <i></i>
            </div>

            <strong>{editorConfiguration.productName}</strong>

            <span>{editorConfiguration.fileName}</span>
          </div>

          {/* IDE menu */}

          <div className="code-editor-menu">
            <span>File</span>
            <span>Edit</span>
            <span>Search</span>
            <span>Run</span>
            <span>Compile</span>
            <span>Debug</span>
            <span>Help</span>
          </div>

          {/* File toolbar */}

          <div className="code-editor-toolbar">
            <div className="code-editor-file-info">
              <span className="code-editor-language-icon">
                {language.icon}
              </span>

              <div>
                <strong>{editorConfiguration.fileName}</strong>
                <span>{language.name} Editor</span>
              </div>
            </div>

            <div className="code-editor-toolbar-actions">
              <button type="button" onClick={handleCopy}>
                {copyMessage}
              </button>

              <button type="button" onClick={handleDownload}>
                Download
              </button>
            </div>
          </div>

          {/* Code input */}

          <div className="code-editor-input-wrap">
            <div
              ref={lineNumbersRef}
              className="code-editor-line-numbers"
              aria-hidden="true"
            >
              {Array.from(
                { length: lineCount },
                (_, index) => (
                  <span key={index}>{index + 1}</span>
                )
              )}
            </div>

            <textarea
              ref={textareaRef}
              className="code-editor-textarea"
              value={code}
              onChange={(event) => {
                onCodeChange(event.target.value);
                updateCursorPosition(event.target);
              }}
              onClick={(event) =>
                updateCursorPosition(event.currentTarget)
              }
              onKeyUp={(event) =>
                updateCursorPosition(event.currentTarget)
              }
              onKeyDown={handleEditorKeyDown}
              onScroll={handleEditorScroll}
              spellCheck="false"
              autoCapitalize="off"
              autoCorrect="off"
              aria-label={`${language.name} code editor`}
            />
          </div>

          {/* Editor footer */}

          <div className="code-editor-footer">
            <button
              type="button"
              className="code-editor-reset-button"
              onClick={onReset}
            >
              ↻ Reset Code
            </button>

            <span className="code-editor-shortcut">
              Ctrl + Enter to run
            </span>

            <button
              type="button"
              className="code-editor-run-button"
              onClick={onRun}
            >
              <span>▶</span>
              Run Code
            </button>
          </div>

          {/* IDE status bar */}

          <div className="code-editor-statusbar">
            <span className="code-editor-ready-status">
              <i></i>
              Ready
            </span>

            <span>{language.name}</span>
            <span>UTF-8</span>

            <span>
              Ln {cursorPosition.line}, Col{" "}
              {cursorPosition.column}
            </span>
          </div>
        </div>

        {/* =================================================
            OUTPUT PANEL
        ================================================= */}

        <div
          className="code-output-panel"
          data-output-state={outputState}
        >
          <div className="code-output-heading">
            <div>
              <span className="code-output-status-dot"></span>
              <strong>Output Console</strong>
            </div>

            <span>
              {outputState === "error"
                ? "Error"
                : outputState === "running"
                  ? "Running"
                  : "Console"}
            </span>
          </div>

          <pre className="code-output-content">
            {output || "Ready to execute your code."}
          </pre>

          {previewContent ? (
            <div className="code-preview-frame">
              <iframe
                title="Live preview"
                srcDoc={previewContent}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          ) : null}

          <div className="code-output-footer">
            <span>
              {outputState === "error"
                ? "Execution failed"
                : outputState === "running"
                  ? "Executing program..."
                  : "Ready to execute"}
            </span>

            <span className="code-output-language">
              {language.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}