import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeEditor from "../../components/coding/CodeEditor/CodeEditor";
import LanguageSidebar from "../../components/coding/LanguageSidebar/LanguageSidebar";
import { getProgrammingLanguage } from "../../data/legacy/programmingLabData";
import "./ProgrammingLab.css";

const EDITOR_APPEARANCES = {
  c: {
    theme: "turbo-c",
    product: "Turbo C",
    fileName: "PROGRAM.C",
  },

  cpp: {
    theme: "turbo-c",
    product: "Turbo C++",
    fileName: "PROGRAM.CPP",
  },

  "c++": {
    theme: "turbo-c",
    product: "Turbo C++",
    fileName: "PROGRAM.CPP",
  },

  python: {
    theme: "python",
    product: "Python Studio",
    fileName: "main.py",
  },

  javascript: {
    theme: "javascript",
    product: "JavaScript Studio",
    fileName: "app.js",
  },

  html: {
    theme: "html",
    product: "Web Studio",
    fileName: "index.html",
  },

  css: {
    theme: "css",
    product: "Web Studio",
    fileName: "style.css",
  },

  java: {
    theme: "java",
    product: "Java IDE",
    fileName: "Main.java",
  },

  php: {
    theme: "php",
    product: "PHP Studio",
    fileName: "index.php",
  },

  sql: {
    theme: "sql",
    product: "SQL Console",
    fileName: "query.sql",
  },

  bash: {
    theme: "terminal",
    product: "Linux Terminal",
    fileName: "main.sh",
  },

  r: {
    theme: "r-studio",
    product: "R Studio",
    fileName: "analysis.r",
  },

  csharp: {
    theme: "dotnet",
    product: ".NET Studio",
    fileName: "Program.cs",
  },

  vbnet: {
    theme: "dotnet",
    product: "Visual Basic Studio",
    fileName: "Program.vb",
  },

  aspnet: {
    theme: "dotnet",
    product: "ASP.NET Studio",
    fileName: "Default.aspx",
  },

  android: {
    theme: "android",
    product: "Android Studio",
    fileName: "MainActivity.kt",
  },

  arduino: {
    theme: "arduino",
    product: "Arduino IDE",
    fileName: "sketch.ino",
  },
};

const DEFAULT_EDITOR_APPEARANCE = {
  theme: "default",
  product: "LearnSphere Code Studio",
  fileName: "main.txt",
};

export default function ProgrammingLab() {
  const { languageId } = useParams();
  const language = getProgrammingLanguage(languageId);

  const editorAppearance =
  EDITOR_APPEARANCES[language.id] ||
  DEFAULT_EDITOR_APPEARANCE;

  const [code, setCode] = useState(language.defaultCode);
  const [output, setOutput] = useState(language.defaultOutput);
  const [previewContent, setPreviewContent] = useState("");
  const [activeChallenge, setActiveChallenge] = useState(0);

  useEffect(() => {
    setCode(language.defaultCode);
    setOutput(language.defaultOutput);
    setPreviewContent("");
    setActiveChallenge(0);
  }, [language.id, language.defaultCode, language.defaultOutput]);

  const runCode = () => {
    if (language.id === "javascript") {
      setPreviewContent("");
      runJavaScriptCode(code, setOutput);
      return;
    }

    if (language.id === "html") {
      setOutput("HTML preview generated below.");
      setPreviewContent(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f8fafc;color:#0f172a;padding:24px;} .learnsphere-preview-card{max-width:900px;margin:auto;padding:30px;border-radius:24px;background:#fff;box-shadow:0 22px 60px rgba(15,23,42,0.08);} .learnsphere-preview-card h1{margin:0 0 1rem;font-size:clamp(1.7rem,3vw,2.4rem);line-height:1.1;} .learnsphere-preview-card p{margin:0 0 1rem;color:#475569;line-height:1.75;} .learnsphere-preview-card button{padding:11px 18px;border:none;border-radius:12px;background:linear-gradient(135deg,#22c55e,#6366f1);color:#fff;font-weight:700;cursor:pointer;}</style></head><body><div class="learnsphere-preview-card">${code}</div></body></html>`);
      return;
    }

    if (language.id === "css") {
      setOutput("CSS preview generated below.");
      setPreviewContent(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f8fafc;color:#0f172a;padding:24px;} .learnsphere-preview-card{max-width:900px;margin:auto;padding:30px;border-radius:24px;background:#fff;box-shadow:0 22px 60px rgba(15,23,42,0.08);} .learnsphere-preview-card h1{margin:0 0 1rem;font-size:clamp(1.7rem,3vw,2.4rem);line-height:1.1;} .learnsphere-preview-card p{margin:0 0 1rem;color:#475569;line-height:1.75;} ${code}</style></head><body><div class="learnsphere-preview-card"><h1>Live CSS preview</h1><p>Style this example card by editing the CSS above.</p><button>Preview button</button></div></body></html>`);
      return;
    }

    setPreviewContent("");
setOutput(`Compiling ${language.name} code...`);

runCodeWithPiston(language.id, code)
  .then((result) => {
    setOutput(formatExecutionResult(result));
  })
  .catch((error) => {
    setOutput(`Execution Error:\n${error.message}`);
  });
  };

  const resetCode = () => {
    setCode(language.defaultCode);
    setOutput(language.defaultOutput);
  };

  return (
    <div
  className="programming-lab-page"
  data-language={language.id}
  data-editor-theme={editorAppearance.theme}
>
      <LanguageSidebar activeLanguageId={language.id} />

      <main className="programming-lab-content">
        <div className="programming-lab-container">
          <div className="programming-lab-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/programming-lab/javascript">Programming Lab</Link>
            <span>›</span>
            <span>{language.name}</span>
          </div>

          <section className="programming-lab-hero">
            <div className="programming-lab-language-brand">
              <span
                className={`programming-lab-language-icon ${language.colorClass}`}
              >
                {language.icon}
              </span>

              <div>
                <span>Interactive Learning Environment</span>
                <h1>{language.name} Programming Lab</h1>
              </div>
            </div>

            <p>{language.description}</p>

            <div className="programming-lab-hero-stats">
              <div>
                <strong>20+</strong>
                <span>Practice Programs</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Coding Challenges</span>
              </div>

              <div>
                <strong>Beginner</strong>
                <span>Learning Level</span>
              </div>
            </div>
          </section>

<section className="programming-lab-workspace">
  <div className="programming-lab-section-title">
    <div>
      <span>Workspace</span>
      <h2>Write, run and learn</h2>
    </div>

    <span className="programming-lab-save-status">
      <i></i>
      Auto-saved locally
    </span>
  </div>

  <div
    className="programming-lab-ide"
    data-editor-theme={editorAppearance.theme}
  >
    {/* IDE title bar */}

    <div className="programming-lab-ide-titlebar">
      <div className="programming-lab-ide-window-dots">
        <i></i>
        <i></i>
        <i></i>
      </div>

      <strong>{editorAppearance.product}</strong>

      <span>{editorAppearance.fileName}</span>
    </div>

    {/* IDE menu */}

    <div className="programming-lab-ide-menu">
      <span>File</span>
      <span>Edit</span>
      <span>Search</span>
      <span>Run</span>
      <span>Compile</span>
      <span>Debug</span>
      <span>Help</span>
    </div>

    {/* Active file tab */}

    <div className="programming-lab-ide-tabs">
      <div className="programming-lab-ide-tab-active">
        <span className="programming-lab-ide-file-icon">
          {language.icon}
        </span>

        <strong>{editorAppearance.fileName}</strong>

        <span className="programming-lab-ide-tab-close">
          ×
        </span>
      </div>
    </div>

    {/* Your existing CodeEditor */}

    <div className="programming-lab-editor-host">
      <CodeEditor
        language={language}
        code={code}
        output={output}
        previewContent={previewContent}
        onCodeChange={setCode}
        onRun={runCode}
        onReset={resetCode}
      />
    </div>

    {/* IDE bottom status */}

    <div className="programming-lab-ide-status">
      <span>● Ready</span>

      <span>{language.name}</span>

      <span>UTF-8</span>

      <span>Ln 1, Col 1</span>
    </div>
  </div>
</section>

          <section className="programming-lab-challenges-section">
            <div className="programming-lab-section-title">
              <div>
                <span>Practice Zone</span>
                <h2>Coding Challenges</h2>
              </div>

              <p>
                Solve practical challenges to improve your logic and confidence.
              </p>
            </div>

            <div className="programming-lab-challenge-grid">
              {language.challenges.map((challenge, index) => (
                <button
                  type="button"
                  key={challenge}
                  className={`programming-lab-challenge-card ${
                    activeChallenge === index
                      ? "programming-lab-challenge-card-active"
                      : ""
                  }`}
                  onClick={() => setActiveChallenge(index)}
                >
                  <span className="programming-lab-challenge-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="programming-lab-challenge-content">
                    <strong>Challenge {index + 1}</strong>
                    <small>{challenge}</small>
                  </span>

                  <span className="programming-lab-challenge-arrow">→</span>
                </button>
              ))}
            </div>

            <div className="programming-lab-selected-challenge">
              <div className="programming-lab-selected-challenge-icon"><img src="/icon.png" alt="" /></div>

              <div>
                <span>Selected Challenge</span>
                <h3>{language.challenges[activeChallenge]}</h3>
                <p>
                  Try solving this challenge in the editor above. Use clear
                  variable names and test your program with different inputs.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 260,
                    behavior: "smooth",
                  })
                }
              >
                Solve Challenge
                <span>↑</span>
              </button>
            </div>
          </section>

          <section className="programming-lab-learning-section">
            <div className="programming-lab-section-title">
              <div>
                <span>Learning Path</span>
                <h2>What to learn next</h2>
              </div>
            </div>

            <div className="programming-lab-learning-grid">
              <article>
                <span>01</span>
                <h3>Syntax Fundamentals</h3>
                <p>
                  Learn variables, data types, operators, comments, and basic
                  program structure.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Control Flow</h3>
                <p>
                  Master conditional statements, loops, and decision-making
                  logic.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Functions & Logic</h3>
                <p>
                  Write reusable functions and improve your problem-solving
                  approach.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Mini Projects</h3>
                <p>
                  Apply your knowledge by building useful, portfolio-ready
                  projects.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function runJavaScriptCode(code, setOutput) {
  const consoleOutput = [];
  const originalConsoleLog = console.log;

  try {
    console.log = (...values) => {
      const formattedValues = values.map((value) => {
        if (typeof value === "object") {
          return JSON.stringify(value, null, 2);
        }

        return String(value);
      });

      consoleOutput.push(formattedValues.join(" "));
    };

    new Function(code)();

    setOutput(
      consoleOutput.length > 0
        ? consoleOutput.join("\n")
        : "Program executed successfully. No console output."
    );
  } catch (error) {
    setOutput(`Error:\n${error.message}`);
  } finally {
    console.log = originalConsoleLog;
  }
}
/* =========================================================
   REMOTE CODE EXECUTION
========================================================= */

const PISTON_API_URL = "https://emkc.org/api/v2/piston";

const PISTON_LANGUAGE_ALIASES = {
  c: ["c", "gcc"],

  cpp: ["c++", "cpp", "g++"],
  "c-plus-plus": ["c++", "cpp", "g++"],

  python: ["python", "python3", "py"],

  java: ["java"],

  php: ["php"],

  bash: ["bash", "sh"],

  r: ["r"],

  csharp: ["csharp", "c#", "cs"],

  vbnet: [
    "vb",
    "vbnet",
    "visual-basic",
    "visualbasic",
  ],

  ruby: ["ruby"],

  go: ["go"],

  rust: ["rust"],

  kotlin: ["kotlin"],
};

const CODE_FILE_NAMES = {
  c: "main.c",
  cpp: "main.cpp",
  "c-plus-plus": "main.cpp",
  python: "main.py",
  java: "Main.java",
  php: "main.php",
  bash: "main.sh",
  r: "main.r",
  csharp: "Main.cs",
  vbnet: "Main.vb",
  ruby: "main.rb",
  go: "main.go",
  rust: "main.rs",
  kotlin: "Main.kt",
};

let pistonRuntimesCache = null;

/* Get all available compiler runtimes */

async function getPistonRuntimes() {
  if (pistonRuntimesCache) {
    return pistonRuntimesCache;
  }

  const response = await fetch(
    `${PISTON_API_URL}/runtimes`
  );

  if (!response.ok) {
    throw new Error(
      "Unable to load compiler runtimes."
    );
  }

  pistonRuntimesCache = await response.json();

  return pistonRuntimesCache;
}

/* Find compiler runtime for selected language */

async function findPistonRuntime(languageId) {
  const aliases =
    PISTON_LANGUAGE_ALIASES[languageId];

  if (!aliases) {
    throw new Error(
      `${languageId} execution is not configured.`
    );
  }

  const runtimes = await getPistonRuntimes();

  const normalizedAliases = aliases.map((alias) =>
    alias.toLowerCase()
  );

  const runtime = runtimes.find((item) => {
    const availableNames = [
      item.language,
      ...(item.aliases || []),
    ].map((name) => name.toLowerCase());

    return normalizedAliases.some((alias) =>
      availableNames.includes(alias)
    );
  });

  if (!runtime) {
    throw new Error(
      `No online compiler is available for ${languageId}.`
    );
  }

  return runtime;
}

/* Send code to compiler */

async function runCodeWithPiston(
  languageId,
  sourceCode
) {
  const runtime =
    await findPistonRuntime(languageId);

  const response = await fetch(
    `${PISTON_API_URL}/execute`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        language: runtime.language,
        version: runtime.version,

        files: [
          {
            name:
              CODE_FILE_NAMES[languageId] ||
              "main.txt",

            content: sourceCode,
          },
        ],

        stdin: "",

        compile_timeout: 10000,
        run_timeout: 5000,
      }),
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();

    throw new Error(
      errorMessage ||
        "The compiler could not execute the code."
    );
  }

  return response.json();
}

/* Format compiler output and errors */

function formatExecutionResult(result) {
  const compileResult = result.compile;
  const runResult = result.run;

  /* Compilation error */

  if (
    compileResult &&
    compileResult.code !== 0
  ) {
    const compileError =
      compileResult.stderr?.trim() ||
      compileResult.output?.trim() ||
      "Compilation failed.";

    return `Compilation Error:\n${compileError}`;
  }

  if (!runResult) {
    return "The program did not return any result.";
  }

  const standardOutput =
    runResult.stdout?.trim() || "";

  const standardError =
    runResult.stderr?.trim() || "";

  /* Runtime error */

  if (runResult.code !== 0) {
    const runtimeError =
      standardError ||
      runResult.output?.trim() ||
      `Program exited with code ${runResult.code}.`;

    return `Runtime Error:\n${runtimeError}`;
  }

  /* Compiler warnings */

  const compilerWarnings =
    compileResult?.stderr?.trim() || "";

  if (compilerWarnings) {
    return [
      `Compiler Message:\n${compilerWarnings}`,
      standardOutput
        ? `Output:\n${standardOutput}`
        : "Program executed successfully.",
    ].join("\n\n");
  }

  /* Successful execution */

  if (standardError) {
    return standardOutput
      ? `Output:\n${standardOutput}\n\nError:\n${standardError}`
      : `Runtime Error:\n${standardError}`;
  }

  return (
    standardOutput ||
    "Program executed successfully. No output."
  );
}
