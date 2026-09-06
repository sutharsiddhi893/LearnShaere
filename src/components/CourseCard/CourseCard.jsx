import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course, categoryName, testIdPrefix = "course-card" }) => {
    return (
        <article className="course-card" data-testid={`${testIdPrefix}-${course.id}`}>
            <Link to={`/courses/${course.id}`} className="course-card-media" aria-label={course.title}>
                {course.cover ? (
                    <img src={course.cover} alt={course.title} loading="lazy" />
                ) : (
                    <div className="course-card-placeholder">
                        <i className="fa-solid fa-book-open"></i>
                    </div>
                )}
                <span className="course-card-level" data-testid={`${testIdPrefix}-level-${course.id}`}>
                    {course.level}
                </span>
            </Link>

            <div className="course-card-body">
                <span className="course-card-category">{categoryName || "General"}</span>
                <h3 className="course-card-title">
                    <Link to={`/courses/${course.id}`} data-testid={`${testIdPrefix}-title-${course.id}`}>
                        {course.title}
                    </Link>
                </h3>
                <p className="course-card-subtitle">{course.subtitle}</p>

                <div className="course-card-meta">
                    <span>
                        <i className="fa-regular fa-clock"></i> {course.duration || "8 Semesters"}
                    </span>
                    <span>
                        <i className="fa-regular fa-user"></i> {course.instructor || "University"}
                    </span>
                    <span>
                        <i className="fa-solid fa-layer-group"></i> {course.lessons ? course.lessons.length : (course.semesters ? course.semesters.length : 8)} Semesters
                    </span>
                </div>

                <Link
                    to={`/courses/${course.id}`}
                    className="course-card-cta"
                    data-testid={`${testIdPrefix}-cta-${course.id}`}
                >
                    Start Learning <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </article>
    );
};

export default CourseCard;
