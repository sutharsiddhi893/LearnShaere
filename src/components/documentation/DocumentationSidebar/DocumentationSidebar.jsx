/* =========================================================
   DOCUMENTATION SIDEBAR
   Units → Topics outline navigation.
========================================================= */

import React from "react";
import { NavLink } from "react-router-dom";
import "./DocumentationSidebar.css";

const DocumentationSidebar = ({
  subject,
  outline = [],
  activeTopicId,
  buildPath,
  onNavigate,
}) => {
  const [openUnits, setOpenUnits] = React.useState(() =>
    outline.map((unit) => unit.id)
  );

  const toggleUnit = (unitId) =>
    setOpenUnits((current) =>
      current.includes(unitId)
        ? current.filter((id) => id !== unitId)
        : [...current, unitId]
    );

  return (
    <aside className="doc-sidebar">
      <div className="doc-sidebar__head">
        <span className="doc-sidebar__code">{subject?.code}</span>
        <h3 className="doc-sidebar__name">{subject?.name}</h3>
      </div>

      <nav className="doc-sidebar__nav">
        {outline.map((unit) => {
          const isOpen = openUnits.includes(unit.id);

          return (
            <div key={unit.id} className="doc-sidebar__unit">
              <button
                type="button"
                className="doc-sidebar__unit-head"
                onClick={() => toggleUnit(unit.id)}
              >
                <span className="doc-sidebar__unit-label">{unit.label}</span>
                <span className="doc-sidebar__unit-title">{unit.title}</span>
                <span className="doc-sidebar__caret">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <ul className="doc-sidebar__topics">
                  {unit.topics.length === 0 && (
                    <li className="doc-sidebar__soon">Coming soon</li>
                  )}

                  {unit.topics.map((topic) => (
                    <li key={topic.id}>
                      <NavLink
                        to={buildPath(topic.id)}
                        onClick={onNavigate}
                        className={() =>
                          `doc-sidebar__topic ${topic.id === activeTopicId ? "is-active" : ""
                          }`
                        }
                      >
                        {topic.title}
                        {topic.minutes && (
                          <span className="doc-sidebar__time">
                            {topic.minutes}m
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default DocumentationSidebar;