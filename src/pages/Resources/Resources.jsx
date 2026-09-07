import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen, CheckCircle2, Download, FileText, Search, X } from "lucide-react";
import previousPapers from "../../data/resources/previousPapers";
import { coursesData, getAllSubjects, getSubjectQuestions } from "../../data";
import "./Resources.css";

const RESOURCE_CATEGORIES = [
  { slug: "all", title: "All Resources" },
  { slug: "previous-papers", title: "Previous Papers" },
  { slug: "question-bank", title: "Question Bank" },
  { slug: "e-books", title: "E-Books" },
  { slug: "cheat-sheets", title: "Cheatsheet" },
  { slug: "syllabus", title: "Syllabus" },
  { slug: "pdf-notes", title: "PDF Notes" },
];

const COURSE_ORDER = ["bca", "bsc-it", "msc-it", "mca", "btech", "mtech"];

const normalise = (value) => String(value || "").trim().toLowerCase();

function EmptyResource({ title, description }) {
  return (
    <div className="resources-empty">
      <div className="resources-empty-icon"><BookOpen size={24} /></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function PreviousPapers() {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("all");
  const [semester, setSemester] = useState("all");
  const [subject, setSubject] = useState("all");

  const availableSemesters = useMemo(() => {
    if (course === "all") return [...new Set(previousPapers.map((paper) => paper.semester).filter(Boolean))].sort((a, b) => a - b);
    return [...new Set(previousPapers.filter((paper) => paper.courseId === course || normalise(paper.course) === normalise(coursesData[course]?.shortName)).map((paper) => paper.semester).filter(Boolean))].sort((a, b) => a - b);
  }, [course]);

  const availableSubjects = useMemo(() => {
    const source = course === "all"
      ? previousPapers
      : previousPapers.filter((paper) => paper.courseId === course || normalise(paper.course) === normalise(coursesData[course]?.shortName));
    return [...new Set(source.map((paper) => paper.subject).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  }, [course]);

  const filtered = useMemo(() => {
    const q = normalise(query);
    return previousPapers.filter((paper) => {
      const courseMatch = course === "all" || paper.courseId === course || normalise(paper.course) === normalise(coursesData[course]?.shortName);
      const semesterMatch = semester === "all" || String(paper.semester) === semester;
      const subjectMatch = subject === "all" || paper.subject === subject;
      const textMatch = !q || [paper.subject, paper.title, paper.originalFileName, paper.course].some((value) => normalise(value).includes(q));
      return courseMatch && semesterMatch && subjectMatch && textMatch;
    });
  }, [course, semester, subject, query]);

  const clearFilters = () => {
    setQuery("");
    setCourse("all");
    setSemester("all");
    setSubject("all");
  };

  return (
    <div className="resource-content">
      <div className="resource-heading">
        <div>
          <p className="section-eyebrow">Exam preparation</p>
          <h2>Previous Papers</h2>
          <p>Use the supplied previous-paper collection to practise real exam formats. Exact duplicate PDF files have been consolidated.</p>
        </div>
        <div className="resource-count"><strong>{filtered.length}</strong><span>papers shown</span></div>
      </div>

      <div className="resource-filters">
        <label className="resource-search">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search subject or paper..." />
        </label>
        <select value={course} onChange={(event) => { setCourse(event.target.value); setSemester("all"); setSubject("all"); }} aria-label="Filter by course">
          <option value="all">All courses</option>
          {COURSE_ORDER.map((id) => <option key={id} value={id}>{coursesData[id]?.shortName}</option>)}
        </select>
        <select value={semester} onChange={(event) => setSemester(event.target.value)} aria-label="Filter by semester">
          <option value="all">All semesters</option>
          {availableSemesters.map((number) => <option key={number} value={number}>Semester {number}</option>)}
        </select>
        <select value={subject} onChange={(event) => setSubject(event.target.value)} aria-label="Filter by subject">
          <option value="all">All subjects</option>
          {availableSubjects.map((name) => <option key={name} value={name}>{name}</option>)}
        </select>
        {(query || course !== "all" || semester !== "all" || subject !== "all") && (
          <button type="button" className="filter-clear" onClick={clearFilters}><X size={16} /> Clear</button>
        )}
      </div>

      {filtered.length ? (
        <div className="paper-grid">
          {filtered.map((paper) => (
            <article className="paper-card" key={paper.id}>
              <div className="paper-card-top">
                <span className="paper-type"><FileText size={15} /> PDF</span>
                {paper.status === "published" ? <span className="paper-status"><CheckCircle2 size={14} /> Matched</span> : <span className="paper-status paper-status-review">Historical</span>}
              </div>
              <h3>{paper.subject}</h3>
              <p>{paper.title}</p>
              <div className="paper-meta">
                <span>{paper.course}</span>
                {paper.semester ? <span>Semester {paper.semester}</span> : null}
                {paper.curriculum ? <span>{paper.curriculum}</span> : null}
                {paper.year ? <span>{paper.year}</span> : null}
              </div>
              <a className="paper-download" href={paper.file} target="_blank" rel="noreferrer">
                <Download size={17} /> Open / Download PDF
              </a>
            </article>
          ))}
        </div>
      ) : (
        <EmptyResource title="No papers match these filters" description="Try another course, semester, subject, or search term." />
      )}
    </div>
  );
}

function QuestionBank() {
  const [course, setCourse] = useState("bca");
  const [subjectId, setSubjectId] = useState("");
  const subjects = useMemo(() => getAllSubjects(course).filter((item) => item.hasContent !== false), [course]);
  const selectedSubject = subjects.find((item) => item.id === subjectId) || subjects[0] || null;
  const questions = useMemo(() => getSubjectQuestions(selectedSubject), [selectedSubject]);

  return (
    <div className="resource-content">
      <div className="resource-heading">
        <div>
          <p className="section-eyebrow">Existing curriculum data</p>
          <h2>Question Bank</h2>
          <p>This section reads the questions already stored inside each subject. No second question database is created.</p>
        </div>
        <div className="resource-count"><strong>{questions.length}</strong><span>questions</span></div>
      </div>

      <div className="question-filters">
        <select value={course} onChange={(event) => { setCourse(event.target.value); setSubjectId(""); }} aria-label="Question bank course">
          {COURSE_ORDER.map((id) => <option key={id} value={id}>{coursesData[id]?.shortName}</option>)}
        </select>
        <select value={selectedSubject?.id || ""} onChange={(event) => setSubjectId(event.target.value)} aria-label="Question bank subject">
          {subjects.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </div>

      {selectedSubject && questions.length ? (
        <div className="question-list">
          {questions.map((question, index) => (
            <article className="question-card" key={`${selectedSubject.id}-${question.id || index}`}>
              <span>Q{index + 1}</span>
              <div><h3>{question.question}</h3>{question.answer ? <p>{question.answer}</p> : null}</div>
              {question.marks ? <b>{question.marks} marks</b> : null}
            </article>
          ))}
        </div>
      ) : (
        <EmptyResource title="No question-bank content yet" description="This subject does not currently contain long-answer questions in the existing curriculum data." />
      )}
    </div>
  );
}

function ResourcePlaceholder({ title, description }) {
  return <EmptyResource title={`${title} is not added yet`} description={description} />;
}

export default function ResourcesPage() {
  const { resourceCategory } = useParams();
  const activeSlug = RESOURCE_CATEGORIES.some((item) => item.slug === resourceCategory) ? resourceCategory : "all";
  const totalPapers = previousPapers.length;
  const matchedPapers = previousPapers.filter((paper) => paper.status === "published").length;

  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <p className="section-eyebrow">Study resources</p>
          <h1>One place for papers, questions and study material.</h1>
          <p>Resources are connected to the existing study data instead of maintaining duplicate course or question content.</p>
          <div className="resources-hero-actions">
            <Link to="/resources/previous-papers" className="button-primary">Browse previous papers</Link>
            <Link to="/quizzes" className="button-secondary">Open quizzes</Link>
          </div>
        </div>
        <div className="resources-hero-stats" aria-label="Resource collection summary">
          <div><strong>{totalPapers}</strong><span>Unique paper PDFs</span></div>
          <div><strong>{matchedPapers}</strong><span>Matched to current subjects</span></div>
          <div><strong>{RESOURCE_CATEGORIES.length - 1}</strong><span>Resource sections</span></div>
        </div>
      </section>

      <section className="resources-section">
        <nav className="resources-nav" aria-label="Resource categories">
          {RESOURCE_CATEGORIES.map((category) => (
            <Link key={category.slug} to={category.slug === "all" ? "/resources" : `/resources/${category.slug}`} className={`resource-pill ${activeSlug === category.slug ? "resource-pill-active" : ""}`}>
              {category.title}
            </Link>
          ))}
        </nav>

        {activeSlug === "previous-papers" ? <PreviousPapers /> : null}
        {activeSlug === "question-bank" ? <QuestionBank /> : null}
        {activeSlug === "all" ? (
          <div className="resource-overview-grid">
            {RESOURCE_CATEGORIES.slice(1).map((category) => (
              <Link to={`/resources/${category.slug}`} className="resource-overview-card" key={category.slug}>
                <FileText size={22} />
                <h3>{category.title}</h3>
                <p>{category.slug === "previous-papers" ? `${totalPapers} unique PDFs ready to browse.` : category.slug === "question-bank" ? "Uses existing subject questions directly." : "Waiting for the real source material to be added."}</p>
              </Link>
            ))}
          </div>
        ) : null}
        {activeSlug === "e-books" ? <ResourcePlaceholder title="E-Books" description="No e-book files were supplied in the current project/resource collection, so no placeholder books are being invented." /> : null}
        {activeSlug === "cheat-sheets" ? <ResourcePlaceholder title="Cheatsheet" description="Cheatsheets will appear here when actual source material is added." /> : null}
        {activeSlug === "syllabus" ? <ResourcePlaceholder title="Syllabus" description="The course data remains the source of truth. Dedicated syllabus files are not added until real syllabus documents are supplied." /> : null}
        {activeSlug === "pdf-notes" ? <ResourcePlaceholder title="PDF Notes" description="PDF notes will appear here when actual note PDFs are supplied. Existing subject notes are not duplicated into another database." /> : null}
      </section>
    </div>
  );
}
