import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Bookmarks.css";

const initialBookmarks = [
  { id: 1, title: "Programming in C notes", category: "Notes", path: "/courses/bca/semester/1/subject/programming-in-c", description: "Core concepts, loops, arrays, and pointers." },
  { id: 2, title: "React lab", category: "Programming Lab", path: "/programming-lab/react", description: "Hooks, state, and component patterns." },
  { id: 3, title: "Placement aptitude pack", category: "Placement", path: "/placement-hub", description: "Reasoning drills and interview prep." },
];

export default function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks);

  const groupedBookmarks = useMemo(() => {
    return bookmarks.reduce((accumulator, bookmark) => {
      if (!accumulator[bookmark.category]) accumulator[bookmark.category] = [];
      accumulator[bookmark.category].push(bookmark);
      return accumulator;
    }, {});
  }, [bookmarks]);

  return (
    <div className="bookmarks-page">
      <section className="bookmarks-hero">
        <div>
          <p className="section-eyebrow">Bookmarks</p>
          <h1>Save your favorite learning resources in one place.</h1>
          <p>
            Build a personal study library of notes, labs, and placement materials with just a click.
          </p>
        </div>
        <div className="bookmarks-summary-card">
          <strong>{bookmarks.length}</strong>
          <span>saved items</span>
        </div>
      </section>

      <section className="bookmarks-grid">
        {Object.entries(groupedBookmarks).map(([category, items]) => (
          <div key={category} className="bookmark-group-card">
            <div className="bookmark-group-header">
              <h2>{category}</h2>
              <span>{items.length}</span>
            </div>
            <div className="bookmark-list">
              {items.map((item) => (
                <article key={item.id} className="bookmark-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="bookmark-actions">
                    <Link to={item.path}>Open</Link>
                    <button type="button" onClick={() => setBookmarks((current) => current.filter((entry) => entry.id !== item.id))}>
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
