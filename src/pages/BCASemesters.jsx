import { useState } from "react";
import { bcaSemesters } from "../data/legacy/bcaSubjects";
import "../style/bca-semesters.css";

function groupSubjectsByCategory(subjects) {
    return subjects.reduce((groups, subject) => {
        const category = subject.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(subject);

        return groups;

    }, {});
}

function BCASemesters() {
    const [selectedSemesterId, setSelectedSemesterId] = useState(null);

    const selectedSemester = bcaSemesters.find(
        (semester) => semester.id === selectedSemesterId
    );

    const openSemester = (semesterId) => {
        setSelectedSemesterId(semesterId);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const closeSemester = () => {
        setSelectedSemesterId(null);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    /* =====================================================
       SHOW ALL SEMESTERS
    ===================================================== */

    if (!selectedSemester) {
        return (
            <main className="bca-page">
                <div className="bca-container">
                    <header className="bca-page-header">
                        <span className="bca-eyebrow">
                            BCA • NEP 2020
                        </span>

                        <h1>BCA Semester Structure</h1>

                        <p>
                            Select a semester to view its subjects, credits,
                            weekly hours, exam duration and marking structure.
                        </p>
                    </header>

                    <div className="bca-semester-grid">
                        {bcaSemesters.map((semester) => (
                            <button
                                type="button"
                                className="bca-semester-card"
                                key={semester.id}
                                onClick={() => openSemester(semester.id)}
                            >
                                <div className="bca-semester-card-top">
                                    <span className="bca-year-badge">
                                        Year {semester.year}
                                    </span>

                                    <span className="bca-credit-badge">
                                        {semester.minimumCredits} credits
                                    </span>
                                </div>

                                <div className="bca-semester-number">
                                    {semester.roman}
                                </div>

                                <h2>{semester.name}</h2>

                                {semester.track && (
                                    <span className="bca-track-badge">
                                        {semester.track}
                                    </span>
                                )}

                                <div className="bca-semester-information">
                                    <span>
                                        {semester.courseSlots} course slots
                                    </span>

                                    <span>{semester.curriculum}</span>
                                </div>

                                <div className="bca-view-subjects">
                                    View subjects
                                    <span aria-hidden="true">→</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    /* =====================================================
       SHOW SELECTED SEMESTER SUBJECTS
    ===================================================== */

    const groupedSubjects = groupSubjectsByCategory(
        selectedSemester.subjects
    );

    return (
        <main className="bca-page">
            <div className="bca-container">
                <button
                    type="button"
                    className="bca-back-button"
                    onClick={closeSemester}
                >
                    <span aria-hidden="true">←</span>
                    All semesters
                </button>

                <header className="bca-selected-header">
                    <div>
                        <span className="bca-eyebrow">
                            BCA • {selectedSemester.curriculum}
                        </span>

                        <h1>
                            {selectedSemester.name}

                            {selectedSemester.track && (
                                <small>
                                    {" "}
                                    ({selectedSemester.track})
                                </small>
                            )}
                        </h1>

                        <p>
                            Complete subject and examination structure for{" "}
                            {selectedSemester.name}.
                        </p>
                    </div>

                    <div className="bca-header-statistics">
                        <div>
                            <strong>
                                {selectedSemester.courseSlots}
                            </strong>
                            <span>Course slots</span>
                        </div>

                        <div>
                            <strong>
                                {selectedSemester.minimumCredits}
                            </strong>
                            <span>Minimum credits</span>
                        </div>
                    </div>
                </header>

                {selectedSemester.choiceNote && (
                    <div className="bca-choice-notice">
                        <span className="bca-choice-icon">!</span>

                        <div>
                            <strong>Subject selection required</strong>
                            <p>{selectedSemester.choiceNote}</p>
                        </div>
                    </div>
                )}

                <div className="bca-subject-groups">
                    {Object.entries(groupedSubjects).map(
                        ([category, subjects]) => {
                            const choiceGroup = subjects.find(
                                (subject) => subject.choiceGroup
                            )?.choiceGroup;

                            return (
                                <section
                                    className="bca-subject-group"
                                    key={category}
                                >
                                    <div className="bca-group-heading">
                                        <div>
                                            <span>Course category</span>
                                            <h2>{category}</h2>
                                        </div>

                                        {choiceGroup && (
                                            <span className="bca-choose-badge">
                                                {choiceGroup}
                                            </span>
                                        )}
                                    </div>

                                    <div className="bca-subject-grid">
                                        {subjects.map((subject) => (
                                            <article
                                                className="bca-subject-card"
                                                key={subject.code}
                                            >
                                                <div className="bca-subject-card-top">
                                                    <span
                                                        className={
                                                            subject.type === "P"
                                                                ? "bca-type-badge bca-type-practical"
                                                                : "bca-type-badge bca-type-theory"
                                                        }
                                                    >
                                                        {subject.typeLabel}
                                                    </span>

                                                    {subject.isChoice && (
                                                        <span className="bca-option-badge">
                                                            Optional choice
                                                        </span>
                                                    )}
                                                </div>

                                                <span className="bca-subject-code">
                                                    {subject.code}
                                                </span>

                                                <h3>{subject.title}</h3>

                                                <dl className="bca-subject-details">
                                                    <div>
                                                        <dt>Credits</dt>
                                                        <dd>
                                                            {subject.credits}
                                                        </dd>
                                                    </div>

                                                    <div>
                                                        <dt>Weekly hours</dt>
                                                        <dd>
                                                            {
                                                                subject.weeklyHours
                                                            }
                                                        </dd>
                                                    </div>

                                                    <div>
                                                        <dt>Exam duration</dt>
                                                        <dd>
                                                            {
                                                                subject.examDuration
                                                            }
                                                        </dd>
                                                    </div>

                                                    <div>
                                                        <dt>Total marks</dt>
                                                        <dd>
                                                            {
                                                                subject.marks
                                                                    .total
                                                            }
                                                        </dd>
                                                    </div>
                                                </dl>

                                                <div className="bca-marks">
                                                    <span>
                                                        Internal
                                                        <strong>
                                                            {
                                                                subject.marks
                                                                    .internal
                                                            }
                                                        </strong>
                                                    </span>

                                                    <span>
                                                        External
                                                        <strong>
                                                            {
                                                                subject.marks
                                                                    .external
                                                            }
                                                        </strong>
                                                    </span>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            );
                        }
                    )}
                </div>
            </div>
        </main>
    );
}

export default BCASemesters;
