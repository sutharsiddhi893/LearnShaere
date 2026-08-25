import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";

const searchableItems = [
  { title: "Programming in C", category: "Notes", path: "/courses/bca/semester/1/subject/programming-in-c", description: "Foundations, syntax, pointers, and practice problems." },
  { title: "React essentials", category: "Programming Lab", path: "/programming-lab/react", description: "Hands-on component patterns and hooks." },
  { title: "Placement aptitude pack", category: "Placement", path: "/placement-hub", description: "Quantitative reasoning and interview prep drills." },
  { title: "PDF notes for DBMS", category: "Resources", path: "/resources/pdf-notes", description: "Shortcut notes for SQL and database design." },
  { title: "BCA semester 2 quiz", category: "Quizzes", path: "/quizzes", description: "Topic-based quizzes with explanations." },
];

const categoryFilters = ["All", "Notes", "Programming Lab", "Placement", "Resources", "Quizzes"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [recentSearches, setRecentSearches] = useState(["Programming in C", "Placement", "React"]);

  const filteredResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return searchableItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery = !normalized || `${item.title} ${item.description}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecentSearches((current) => [trimmed, ...current.filter((entry) => entry !== trimmed)].slice(0, 5));
  }

  return (
    <div className="search-page">
      <section className="search-hero">
        <p className="section-eyebrow">Search</p>
        <h1>Find notes, quizzes, labs, and placement resources instantly.</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="search-input">
            Search learning materials
          </label>
          <input
            id="search-input"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search subjects, labs, or resources"
          />
          <button type="submit">Search</button>
        </form>

        <div className="search-filters" aria-label="Search filters">
          {categoryFilters.map((category) => (
            <button
              key={category}
              type="button"
              className={`search-filter ${activeCategory === category ? "search-filter-active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="search-results-section">
        <div className="search-sidebar">
          <h2>Recent searches</h2>
          <ul>
            {recentSearches.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link key={item.title} to={item.path} className="search-result-card">
                <div>
                  <p className="search-result-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span>Open →</span>
              </Link>
            ))
          ) : (
            <div className="empty-state-card">
              <h3>No matches found</h3>
              <p>Try another keyword or switch the category filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
