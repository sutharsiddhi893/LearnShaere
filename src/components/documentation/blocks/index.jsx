/* =========================================================
   DOCUMENTATION — CONTENT BLOCKS
   One renderer per block type produced by helpers.js
========================================================= */

import React from "react";
import "./blocks.css";

/* ---------------- HEADING ---------------- */

export const HeadingBlock = ({ block }) => {
    const Tag = `h${Math.min(Math.max(block.level || 2, 2), 5)}`;
    return <Tag className="doc-heading">{block.text}</Tag>;
};

/* ---------------- TEXT ---------------- */

export const TextBlock = ({ block }) => (
    <p className="doc-text">{block.value}</p>
);

/* ---------------- LIST ---------------- */

export const ListBlock = ({ block }) => {
    const Tag = block.ordered ? "ol" : "ul";

    return (
        <Tag className={`doc-list ${block.ordered ? "is-ordered" : "is-bullet"}`}>
            {block.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </Tag>
    );
};

/* ---------------- CODE ---------------- */

export const CodeBlock = ({ block }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(block.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch {
            /* clipboard unavailable */
        }
    };

    return (
        <figure className="doc-code">
            <div className="doc-code__bar">
                <span className="doc-code__lang">{block.language}</span>
                {block.caption && (
                    <span className="doc-code__caption">{block.caption}</span>
                )}
                <button type="button" className="doc-code__copy" onClick={handleCopy}>
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>

            <pre className="doc-code__pre">
                <code className={`language-${block.language}`}>{block.value}</code>
            </pre>
        </figure>
    );
};

/* ---------------- OUTPUT ---------------- */

export const OutputBlock = ({ block }) => (
    <div className="doc-output">
        <span className="doc-output__label">Output</span>
        <pre className="doc-output__pre">{block.value}</pre>
    </div>
);

/* ---------------- TABLE ---------------- */

export const TableBlock = ({ block }) => (
    <div className="doc-table-wrap">
        {block.caption && <p className="doc-table__caption">{block.caption}</p>}

        <table className="doc-table">
            <thead>
                <tr>
                    {block.headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

/* ---------------- NOTE ---------------- */

const NOTE_ICON = {
    info: "i",
    tip: "★",
    warning: "!",
    exam: "✎",
};

const NOTE_TITLE = {
    info: "Note",
    tip: "Tip",
    warning: "Warning",
    exam: "Exam Point",
};

export const NoteBlock = ({ block }) => {
    const variant = block.variant || "info";

    return (
        <aside className={`doc-note doc-note--${variant}`}>
            <span className="doc-note__icon">{NOTE_ICON[variant]}</span>

            <div className="doc-note__body">
                <strong className="doc-note__title">
                    {block.title || NOTE_TITLE[variant]}
                </strong>
                <p className="doc-note__text">{block.value}</p>
            </div>
        </aside>
    );
};

/* ---------------- DEFINITION ---------------- */

export const DefinitionBlock = ({ block }) => (
    <div className="doc-definition">
        <span className="doc-definition__term">{block.term}</span>
        <span className="doc-definition__meaning">{block.meaning}</span>
    </div>
);

/* ---------------- STEPS ---------------- */

export const StepsBlock = ({ block }) => (
    <ol className="doc-steps">
        {block.items.map((item, index) => (
            <li key={index} className="doc-steps__item">
                <span className="doc-steps__num">{index + 1}</span>
                <span className="doc-steps__text">{item}</span>
            </li>
        ))}
    </ol>
);

/* ---------------- IMAGE ---------------- */

export const ImageBlock = ({ block }) => (
    <figure className="doc-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        {block.caption && <figcaption>{block.caption}</figcaption>}
    </figure>
);

/* ---------------- KEY POINTS ---------------- */

export const KeyPointsBlock = ({ block }) => (
    <div className="doc-keypoints">
        <h4 className="doc-keypoints__title">Key Points</h4>

        <ul className="doc-keypoints__list">
            {block.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

/* ---------------- DIVIDER ---------------- */

export const DividerBlock = () => <hr className="doc-divider" />;

/* =========================================================
   REGISTRY
========================================================= */

const REGISTRY = {
    heading: HeadingBlock,
    text: TextBlock,
    list: ListBlock,
    code: CodeBlock,
    output: OutputBlock,
    table: TableBlock,
    note: NoteBlock,
    definition: DefinitionBlock,
    steps: StepsBlock,
    image: ImageBlock,
    keyPoints: KeyPointsBlock,
    divider: DividerBlock,
};

/**
 * Block — renders any content block by its type.
 */
const Block = ({ block }) => {
    const Component = REGISTRY[block?.type];

    if (!Component) {
        if (process.env.NODE_ENV === "development") {
            console.warn("Unknown block type:", block?.type);
        }
        return null;
    }

    return <Component block={block} />;
};

export default Block;