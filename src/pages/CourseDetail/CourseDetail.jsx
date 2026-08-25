import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Button from "../../components/Button";
import "./CourseDetail.css";

const CourseDetail = () => {
    const { courseId } = useParams();
    const { courses, categories, quizzes } = useApp();

    const course = useMemo(() => courses.find((c) => c.id === courseId), [courses, courseId]);
    const category = course ? categories.find((c) => c.id === course.categoryId) : null;
    const relatedQuizzes = useMemo(
        () => quizzes.filter((q) => q.courseId === courseId),
        [quizzes, courseId],
    );

    const [activeLessonId, setActiveLessonId] = useState(course?.lessons?.[0]?.id || null);
    const activeLesson = course?.lessons?.find((l) => l.id === activeLessonId) || null;

    if (!course) {
        return (
            <div className="container course-detail-missing fade-up" data-testid="course-detail-missing">
                <h1>Course not found</h1>
                <p>This course does not exist. It may have been removed.</p>
                <Button as={Link} to="/courses" variant="secondary" data-testid="missing-back-btn">
                    <i className="fa-solid fa-arrow-left"></i> Back to courses
                </Button>
            </div>
        );
    }

    return (
        <div className="course-detail fade-up" data-testid="course-detail-page">
            <div className="container course-detail-top">
                <Link to="/courses" className="course-detail-back" data-testid="course-detail-back">
                    <i className="fa-solid fa-arrow-left"></i> All courses
                </Link>

                <div className="course-detail-hero">
                    <div className="course-detail-hero-text">
                        {category && (
                            <span className="course-detail-category">
                                <i className={`fa-solid ${category.icon}`}></i> {category.name}
                            </span>
                        )}
                        <h1 className="course-detail-title" data-testid="course-detail-title">
                            {course.title}
                        </h1>
                        <p className="course-detail-subtitle">{course.subtitle}</p>

                        <div className="course-detail-meta">
                            <div>
                                <span>Instructor</span>
                                <strong>{course.instructor}</strong>
                            </div>
                            <div>
                                <span>Duration</span>
                                <strong>{course.duration}</strong>
                            </div>
                            <div>
                                <span>Level</span>
                                <strong>{course.level}</strong>
                            </div>
                            <div>
                                <span>Lessons</span>
                                <strong>{course.lessons.length}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="course-detail-hero-media">
                        {course.cover ? (
                            <img src={course.cover} alt={course.title} />
                        ) : (
                            <div className="course-detail-hero-placeholder">
                                <i className="fa-solid fa-book-open"></i>
                            </div>
                        )}
                    </div>
                </div>

                <p className="course-detail-description" data-testid="course-detail-description">
                    {course.description}
                </p>
            </div>

            <div className="container course-detail-body">
                {/* Lessons */}
                <section className="course-detail-lessons" data-testid="course-detail-lessons">
                    <h2 className="course-detail-section-title">
                        <span>01</span> Lessons
                    </h2>

                    {course.lessons.length === 0 ? (
                        <p className="course-detail-empty">No lessons yet. Check back soon.</p>
                    ) : (
                        <div className="course-detail-lessons-grid">
                            <ol className="course-detail-lessons-list">
                                {course.lessons.map((l, i) => (
                                    <li key={l.id}>
                                        <button
                                            type="button"
                                            onClick={() => setActiveLessonId(l.id)}
                                            className={`course-detail-lesson-item ${
                                                activeLessonId === l.id ? "is-active" : ""
                                            }`}
                                            data-testid={`lesson-item-${l.id}`}
                                        >
                                            <span className="course-detail-lesson-num">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="course-detail-lesson-title">
                                                {l.title}
                                            </span>
                                            <span className="course-detail-lesson-duration">
                                                {l.duration}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ol>

                            {activeLesson && (
                                <article
                                    className="course-detail-lesson-view"
                                    data-testid="course-detail-lesson-view"
                                >
                                    <span className="course-detail-lesson-view-eyebrow">
                                        Now viewing
                                    </span>
                                    <h3>{activeLesson.title}</h3>
                                    <p>{activeLesson.content}</p>
                                    <div className="course-detail-lesson-view-foot">
                                        <span>
                                            <i className="fa-regular fa-clock"></i>{" "}
                                            {activeLesson.duration}
                                        </span>
                                    </div>
                                </article>
                            )}
                        </div>
                    )}
                </section>

                {/* Related Quizzes */}
                <section className="course-detail-quizzes" data-testid="course-detail-quizzes">
                    <h2 className="course-detail-section-title">
                        <span>02</span> Test what you learned
                    </h2>

                    {relatedQuizzes.length === 0 ? (
                        <p className="course-detail-empty">
                            No quiz linked yet. Try the{" "}
                            <Link to="/quizzes">quiz library</Link>.
                        </p>
                    ) : (
                        <div className="course-detail-quiz-grid">
                            {relatedQuizzes.map((q) => (
                                <div key={q.id} className="course-detail-quiz-card">
                                    <div>
                                        <h3>{q.title}</h3>
                                        <p>{q.description}</p>
                                        <span className="course-detail-quiz-count">
                                            <i className="fa-solid fa-list-check"></i>{" "}
                                            {q.questions.length} questions
                                        </span>
                                    </div>
                                    <Button
                                        as={Link}
                                        to={`/quizzes/${q.id}`}
                                        data-testid={`start-quiz-${q.id}`}
                                    >
                                        Take Quiz <i className="fa-solid fa-arrow-right"></i>
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default CourseDetail;
