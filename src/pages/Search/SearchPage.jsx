import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { coursesData, getAllSubjects, getSubjectTopics } from "../../data";
import "./SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return Object.values(coursesData).flatMap((course) => getAllSubjects(course.id).flatMap((subject) => {
      const base = `/courses/${course.id}/semester/${subject.semesterNumber}/subject/${subject.id}`;
      const subjectMatch = `${course.name} ${subject.name} ${subject.code || ""}`.toLowerCase().includes(q);
      const topicMatches = getSubjectTopics(subject).filter((topic) => `${topic.title} ${topic.summary || ""} ${(topic.tags || []).join(" ")}`.toLowerCase().includes(q));
      const items = subjectMatch ? [{ title: subject.name, detail: `${course.shortName} · ${subject.semesterTitle} · Subject`, to: base }] : [];
      return items.concat(topicMatches.map((topic) => ({ title: topic.title, detail: `${subject.name} · ${topic.unitLabel} · Topic`, to: `${base}/topic/${topic.id}` })));
    })).slice(0, 100);
  }, [query]);

  return <main className="search-page">
    <section className="search-hero"><p className="section-eyebrow">Search the library</p><h1>Find supplied subjects and study topics.</h1>
      <label className="visually-hidden" htmlFor="search-input">Search notes and topics</label>
      <input id="search-input" autoFocus type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Python, database, networking…" />
    </section>
    <section className="search-results" aria-live="polite">
      {!query.trim() ? <div className="empty-state-card"><h2>Start with a keyword</h2><p>Searches the current curriculum—courses, subjects, and imported topic titles.</p></div> : results.length ? results.map((item, index) => <Link className="search-result-card" key={`${item.to}-${index}`} to={item.to}><div><p className="search-result-category">{item.detail}</p><h2>{item.title}</h2></div><span aria-hidden="true">→</span></Link>) : <div className="empty-state-card"><h2>No curriculum matches</h2><p>Try another subject name or topic.</p></div>}
    </section>
  </main>;
};

export default SearchPage;
