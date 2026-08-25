import { Link } from "react-router-dom";
import { programmingLanguages } from "../../../data/legacy/programmingLabData";
import "./LanguageSidebar.css";

export default function LanguageSidebar({ activeLanguageId }) {
  return (
    <aside className="language-sidebar">
      <div className="language-sidebar-heading">
        <span>Programming Lab</span>
        <h2>Choose Language</h2>
      </div>

      <nav className="language-sidebar-list" aria-label="Programming languages">
        {programmingLanguages.map((language) => (
          <Link
            key={language.id}
            to={`/programming-lab/${language.id}`}
            className={`language-sidebar-link ${
              activeLanguageId === language.id
                ? "language-sidebar-link-active"
                : ""
            }`}
          >
            <span
              className={`language-sidebar-icon ${language.colorClass}`}
              aria-hidden="true"
            >
              {language.icon}
            </span>

            <span>{language.name}</span>

            <span className="language-sidebar-arrow">→</span>
          </Link>
        ))}
      </nav>

      <div className="language-sidebar-tip">
        <span className="language-sidebar-tip-icon">
          <img src="/icon.png" alt="" />
        </span>
        <p>
          Practice regularly. Small programs build strong programming logic.
        </p>
      </div>
    </aside>
  );
}
