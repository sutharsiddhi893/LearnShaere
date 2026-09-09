import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BookOpen, CheckCircle2, Code2, Download, FileText, Search, X, GraduationCap } from "lucide-react";
import previousPapers from "../../data/resources/previousPapers";
import { coursesData, getAllSubjects, getSubjectCheatsheet, getSubjectQuestions, getSubjectTopics } from "../../data";
import { downloadPDF } from "../../utils/pdf";
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

function CheatSheets() {
  const [course, setCourse] = useState("bca");
  const [subjectId, setSubjectId] = useState("");
  const [query, setQuery] = useState("");

  const subjects = useMemo(
    () => getAllSubjects(course).filter((item) => item.hasContent !== false),
    [course]
  );

  const selectedSubject = subjects.find((item) => item.id === subjectId) || subjects[0] || null;
  const topics = useMemo(() => getSubjectCheatsheet(selectedSubject), [selectedSubject]);
  const filteredTopics = useMemo(() => {
    const q = normalise(query);
    if (!q) return topics;
    return topics.filter((topic) =>
      [topic.title, topic.summary, ...(topic.tags || []), ...topic.definitions.flatMap((item) => [item.term, item.meaning]), ...topic.keyPoints]
        .some((value) => normalise(value).includes(q))
    );
  }, [topics, query]);

  return (
    <div className="resource-content">
      <div className="resource-heading">
        <div>
          <p className="section-eyebrow">Derived from existing notes</p>
          <h2>Cheatsheet</h2>
          <p>Quick revision cards are generated directly from the selected subject topics. Nothing is copied into a second content database.</p>
        </div>
        <div className="resource-count"><strong>{filteredTopics.length}</strong><span>topics</span></div>
      </div>

      <div className="question-filters cheatsheet-filters">
        <select value={course} onChange={(event) => { setCourse(event.target.value); setSubjectId(""); }} aria-label="Cheatsheet course">
          {COURSE_ORDER.map((id) => <option key={id} value={id}>{coursesData[id]?.shortName}</option>)}
        </select>
        <select value={selectedSubject?.id || ""} onChange={(event) => setSubjectId(event.target.value)} aria-label="Cheatsheet subject">
          {subjects.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
        <label className="resource-search">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this cheatsheet..." />
        </label>
      </div>

      {selectedSubject && filteredTopics.length ? (
        <div className="cheatsheet-list">
          {filteredTopics.map((topic) => (
            <article className="cheatsheet-card" key={topic.id}>
              <div className="cheatsheet-card-head">
                <div>
                  <span className="cheatsheet-topic-label">Quick revision</span>
                  <h3>{topic.title}</h3>
                </div>
                {topic.tags?.length ? <div className="cheatsheet-tags">{topic.tags.map((tag) => <span key={tag}>{tag}</span>)}</div> : null}
              </div>
              {topic.summary ? <p className="cheatsheet-summary">{topic.summary}</p> : null}

              {topic.definitions.length ? (
                <div className="cheatsheet-section-block">
                  <h4>Definitions</h4>
                  <div className="cheatsheet-definitions">
                    {topic.definitions.map((item, index) => <div key={`${item.term}-${index}`}><strong>{item.term}</strong><span>{item.meaning}</span></div>)}
                  </div>
                </div>
              ) : null}

              {topic.keyPoints.length ? (
                <div className="cheatsheet-section-block">
                  <h4>Key points</h4>
                  <ul>{topic.keyPoints.map((point, index) => <li key={`${topic.id}-point-${index}`}>{point}</li>)}</ul>
                </div>
              ) : null}

              {topic.notes.length ? (
                <div className="cheatsheet-section-block">
                  <h4>Notes</h4>
                  {topic.notes.map((note, index) => <div className="cheatsheet-note" key={`${topic.id}-note-${index}`}><strong>{note.title || note.variant || "Note"}</strong><span>{note.value}</span></div>)}
                </div>
              ) : null}

              {topic.quickFacts?.length ? (
                <div className="cheatsheet-section-block">
                  <h4>Quick facts</h4>
                  <div className="cheatsheet-quick-facts">
                    {topic.quickFacts.map((fact, index) => fact.type === "heading" ? (
                      <strong key={`${topic.id}-fact-${index}`}>{fact.text}</strong>
                    ) : fact.type === "text" ? (
                      <p key={`${topic.id}-fact-${index}`}>{fact.text}</p>
                    ) : (
                      <ul key={`${topic.id}-fact-${index}`}>{fact.items.map((item, itemIndex) => <li key={`${topic.id}-fact-${index}-${itemIndex}`}>{item}</li>)}</ul>
                    ))}
                  </div>
                </div>
              ) : null}

              {topic.tables?.length ? (
                <div className="cheatsheet-section-block">
                  <h4>Reference tables</h4>
                  {topic.tables.map((table, index) => (
                    <div className="cheatsheet-table-wrap" key={`${topic.id}-table-${index}`}>
                      {table.caption ? <strong>{table.caption}</strong> : null}
                      <table><thead><tr>{table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{table.rows.map((row, rowIndex) => <tr key={`${topic.id}-row-${rowIndex}`}>{row.map((cell, cellIndex) => <td key={`${topic.id}-${rowIndex}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table>
                    </div>
                  ))}
                </div>
              ) : null}

              {topic.codeExamples.length ? (
                <div className="cheatsheet-section-block">
                  <h4><Code2 size={16} /> Code</h4>
                  {topic.codeExamples.map((example, index) => (
                    <pre className="cheatsheet-code" key={`${topic.id}-code-${index}`}><code>{example.value}</code></pre>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      ) : (
        <EmptyResource title="No cheatsheet content yet" description="This subject does not currently contain extractable definitions, key points, notes, or code blocks in its existing content." />
      )}
    </div>
  );
}


function buildSyllabusLines(course) {
  const lines = [
    course.name,
    `${course.shortName} — Syllabus`,
    "",
    course.description || "",
    "",
  ];

  course.semesters.forEach((semester) => {
    lines.push(semester.title);
    if (semester.description) lines.push(semester.description);
    semester.subjects.forEach((subject) => lines.push(`• ${subject.name}`));
    lines.push("");
  });

  return lines;
}

function buildNotesLines(subject) {
  const lines = [
    subject.name,
    "Study Notes — generated from the existing subject content",
    "",
  ];

  getSubjectTopics(subject).forEach((topic) => {
    lines.push(topic.title);
    if (topic.summary) lines.push(topic.summary);

    (topic.blocks || []).forEach((block) => {
      if (block.type === "heading") lines.push(block.text);
      if (block.type === "text") lines.push(block.value);
      if (block.type === "definition") lines.push(`Definition — ${block.term}: ${block.meaning}`);
      if (block.type === "list" || block.type === "steps" || block.type === "keyPoints") {
        (block.items || []).forEach((item, index) => lines.push(`${block.ordered || block.type === "steps" ? `${index + 1}.` : "•"} ${item}`));
      }
      if (block.type === "note") lines.push(`${block.title || "Note"}: ${block.value}`);
      if (block.type === "code") {
        if (block.caption) lines.push(block.caption);
        lines.push(block.value);
      }
      if (block.type === "output") lines.push(`Output: ${block.value}`);
      if (block.type === "table") {
        if (block.caption) lines.push(block.caption);
        lines.push((block.headers || []).join(" | "));
        (block.rows || []).forEach((row) => lines.push(row.join(" | ")));
      }
    });
    lines.push("");
  });

  return lines;
}

function Syllabus() {
  const [courseId, setCourseId] = useState("bca");
  const course = coursesData[courseId];

  return (
    <div className="resource-content">
      <div className="resource-heading">
        <div>
          <p className="section-eyebrow">Derived from existing curriculum</p>
          <h2>Syllabus</h2>
          <p>The syllabus is generated directly from the existing course and semester data. No separate subject list is maintained.</p>
        </div>
        <div className="resource-count"><strong>{course?.semesters?.filter((semester) => semester.subjects.length).length || 0}</strong><span>populated semesters</span></div>
      </div>

      <div className="resource-tool-row">
        <select value={courseId} onChange={(event) => setCourseId(event.target.value)} aria-label="Syllabus course">
          {COURSE_ORDER.map((id) => <option key={id} value={id}>{coursesData[id]?.shortName}</option>)}
        </select>
        <button type="button" className="resource-action-button" onClick={() => downloadPDF(`${course.shortName}-syllabus.pdf`, `${course.shortName} — Syllabus`, buildSyllabusLines(course))}>
          <Download size={17} /> Download syllabus PDF
        </button>
      </div>

      <div className="syllabus-grid">
        {course?.semesters?.map((semester) => (
          <article className="syllabus-card" key={semester.number}>
            <div className="syllabus-card-head"><span>Semester {semester.number}</span><b>{semester.subjects.length} subjects</b></div>
            <h3>{semester.title}</h3>
            {semester.description ? <p>{semester.description}</p> : null}
            {semester.subjects.length ? <ul>{semester.subjects.map((subject) => <li key={subject.id}>{subject.name}</li>)}</ul> : <div className="syllabus-empty">Coming soon — no subjects are currently added.</div>}
          </article>
        ))}
      </div>
    </div>
  );
}

function PDFNotes() {
  const [courseId, setCourseId] = useState("bca");
  const [subjectId, setSubjectId] = useState("");
  const subjects = useMemo(() => getAllSubjects(courseId).filter((item) => item.hasContent !== false && getSubjectTopics(item).length), [courseId]);
  const selectedSubject = subjects.find((item) => item.id === subjectId) || subjects[0] || null;
  const topics = selectedSubject ? getSubjectTopics(selectedSubject) : [];

  return (
    <div className="resource-content">
      <div className="resource-heading">
        <div>
          <p className="section-eyebrow">Generated from existing notes</p>
          <h2>PDF Notes</h2>
          <p>Downloadable revision PDFs are generated from the existing subject topics and content blocks. The original notes remain the single source of truth.</p>
        </div>
        <div className="resource-count"><strong>{topics.length}</strong><span>topics</span></div>
      </div>

      <div className="resource-tool-row">
        <select value={courseId} onChange={(event) => { setCourseId(event.target.value); setSubjectId(""); }} aria-label="PDF notes course">
          {COURSE_ORDER.map((id) => <option key={id} value={id}>{coursesData[id]?.shortName}</option>)}
        </select>
        <select value={selectedSubject?.id || ""} onChange={(event) => setSubjectId(event.target.value)} aria-label="PDF notes subject">
          {subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
        </select>
        <button type="button" className="resource-action-button" disabled={!selectedSubject} onClick={() => selectedSubject && downloadPDF(`${selectedSubject.name.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "")}-notes.pdf`, `${selectedSubject.name} — Study Notes`, buildNotesLines(selectedSubject))}>
          <Download size={17} /> Download PDF notes
        </button>
      </div>

      {selectedSubject ? (
        <div className="pdf-notes-preview">
          <div className="pdf-notes-preview-head"><GraduationCap size={20} /><div><strong>{selectedSubject.name}</strong><span>{topics.length} topics available from the existing subject data</span></div></div>
          <div className="pdf-topic-list">{topics.map((topic) => <span key={topic.id}>{topic.title}</span>)}</div>
        </div>
      ) : <EmptyResource title="No PDF-note content yet" description="This course does not currently have subject topics available for PDF generation." />}
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
                <p>{category.slug === "previous-papers" ? `${totalPapers} unique PDFs ready to browse.` : category.slug === "question-bank" ? "Uses existing subject questions directly." : category.slug === "cheat-sheets" ? "Generated from existing subject content without duplicate data." : "Waiting for the real source material to be added."}</p>
              </Link>
            ))}
          </div>
        ) : null}
        {activeSlug === "e-books" ? <ResourcePlaceholder title="E-Books" description="No e-book files were supplied in the current project/resource collection, so no placeholder books are being invented." /> : null}
        {activeSlug === "cheat-sheets" ? <CheatSheets /> : null}
        {activeSlug === "syllabus" ? <Syllabus /> : null}
        {activeSlug === "pdf-notes" ? <PDFNotes /> : null}
      </section>
    </div>
  );
}
