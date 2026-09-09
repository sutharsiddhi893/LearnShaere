import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { findSubjectByDocumentationId, getSubjectQuestions } from "../../data";
import "./PlacementHub.css";

const extraQuestions = [
  "How is an array stored in memory?",
  "What is the difference between a static and dynamic data structure?",
  "What is a circular queue and where is it useful?",
  "What is a deque? Explain its operations.",
  "What is stack overflow and stack underflow?",
  "How can a stack be implemented using an array?",
  "How can a queue be implemented using a linked list?",
  "What is a singly linked list? Explain insertion and deletion.",
  "What is a doubly linked list? What are its advantages?",
  "What is a circular linked list?",
  "How do you reverse a singly linked list?",
  "How can you detect a cycle in a linked list?",
  "What is a binary tree?",
  "What is a binary search tree (BST)?",
  "What is the difference between a binary tree and a BST?",
  "What is the height of a tree?",
  "Explain preorder, inorder and postorder traversal.",
  "How can you find the minimum and maximum value in a BST?",
  "What is a balanced tree?",
  "What is a graph data structure?",
  "Differentiate between directed and undirected graphs.",
  "What is an adjacency matrix?",
  "What is an adjacency list?",
  "When would you prefer an adjacency list over an adjacency matrix?",
  "What is a connected graph?",
  "What is a cycle in a graph?",
  "What is the time complexity of linear search?",
  "What is the prerequisite for binary search?",
  "Compare linear search and binary search.",
  "What is the best, average and worst-case complexity of bubble sort?",
];

const categoryFor = (question) => {
  const text = question.toLowerCase();
  if (/tree|bst|binary search tree|traversal|height of a tree|balanced tree/.test(text)) return "Trees";
  if (/graph|adjacency|connected graph|cycle in a graph|directed|undirected/.test(text)) return "Graphs";
  if (/linked list|singly|doubly|circular linked|reverse.*list|cycle.*list/.test(text)) return "Linked Lists";
  if (/stack|queue|deque|overflow|underflow/.test(text)) return "Stacks & Queues";
  if (/search|sort|bubble|binary search|linear search/.test(text)) return "Searching & Sorting";
  return "Foundations";
};

const PlacementHubPage = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const dsaSubject = findSubjectByDocumentationId("bca", "fundamentals-of-data-structure");
  const sourceQuestions = getSubjectQuestions(dsaSubject);

  const questions = useMemo(() => {
    const source = sourceQuestions.map((item) => ({ question: item.question }));
    const combined = [...source, ...extraQuestions.map((question) => ({ question }))];
    const seen = new Set();
    return combined.filter((item) => {
      const key = item.question.trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).slice(0, 50).map((item) => ({ ...item, category: categoryFor(item.question) }));
  }, [sourceQuestions]);

  const categories = ["All", ...new Set(questions.map((item) => item.category))];
  const filtered = questions.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const normalizedQuery = query.trim().toLowerCase().replace(/\s+/g, " ");
    const normalizedQuestion = item.question.toLowerCase().replace(/\s+/g, " ");
    const matchesSearch = !normalizedQuery || normalizedQuestion.includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="placement-page">
      <section className="placement-hero placement-reveal">
        <div className="placement-hero-copy">
          <span className="placement-kicker">Placement preparation</span>
          <h1>DSA questions that sharpen your interview thinking.</h1>
          <p>
            A focused practice space built around the Data Structure material already
            present in LearnSphere. No OJT clutter, no random placement dashboard.
          </p>
          <div className="placement-hero-actions">
            <a href="#dsa-questions" className="placement-primary-btn">Start practicing ↓</a>
            <Link to="/resources/question-bank" className="placement-secondary-btn">Question bank ↗</Link>
          </div>
        </div>
        <div className="placement-orbit-card">
          <span>DSA</span>
          <strong>{questions.length}</strong>
          <small>practice questions</small>
          <div className="placement-orbit">⌁</div>
        </div>
      </section>

      <section id="dsa-questions" className="placement-card placement-reveal">
        <div className="placement-section-heading">
          <div>
            <span className="placement-kicker">Interview drill</span>
            <h2>50 DSA questions</h2>
          </div>
          <span className="placement-count">{filtered.length}/50</span>
        </div>

        <div className="placement-controls">
          <label className="placement-search">
            <span>⌕</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a DSA question..." />
          </label>
          <div className="placement-filters">
            {categories.map((item) => (
              <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="placement-question-grid">
          {filtered.map((item, index) => (
            <article className="placement-question-card" key={`${item.question}-${index}`}>
              <div className="placement-question-top">
                <span className="placement-question-number">{String(questions.indexOf(item) + 1).padStart(2, "0")}</span>
                <span className="placement-question-tag">{item.category}</span>
              </div>
              <h3>{item.question}</h3>
              <span className="placement-practice-label">Interview practice</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PlacementHubPage;
