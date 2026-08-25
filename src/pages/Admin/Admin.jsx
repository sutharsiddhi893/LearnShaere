import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import "./Admin.css";

const TABS = [
  { id: "categories", label: "Categories", icon: "◈" },
  { id: "courses", label: "Courses & Lessons", icon: "▤" },
  { id: "quizzes", label: "Quizzes & Questions", icon: "?" },
];

const LEVELS = ["Beginner", "Intermediate", "Advanced"];

const emptyCategoryForm = {
  name: "",
  icon: "◈",
};

const emptyCourseForm = {
  title: "",
  subtitle: "",
  categoryId: "",
  level: "Beginner",
  duration: "",
  instructor: "",
  cover: "",
  description: "",
};

const emptyLessonForm = {
  courseId: "",
  title: "",
  content: "",
  duration: "10 min",
};

const emptyQuizForm = {
  title: "",
  description: "",
  courseId: "",
};

const emptyQuestionForm = {
  quizId: "",
  text: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctIndex: 0,
};

function Notice({ notice }) {
  if (!notice) {
    return null;
  }

  return (
    <div className={`admin-notice admin-notice-${notice.type}`} role="status">
      <span>{notice.type === "ok" ? "✓" : "!"}</span>
      <p>{notice.text}</p>
    </div>
  );
}

export default function Admin() {
  const {
    categories = [],
    courses = [],
    quizzes = [],
    addCategory,
    addCourse,
    addLesson,
    addQuiz,
    addQuestion,
    resetToSeed,
  } = useApp();

  const [activeTab, setActiveTab] = useState("categories");
  const [notice, setNotice] = useState(null);

  const [categoryForm, setCategoryForm] = useState(emptyCategoryForm);
  const [courseForm, setCourseForm] = useState(emptyCourseForm);
  const [lessonForm, setLessonForm] = useState(emptyLessonForm);
  const [quizForm, setQuizForm] = useState(emptyQuizForm);
  const [questionForm, setQuestionForm] = useState(emptyQuestionForm);

  const showNotice = (type, text) => {
    setNotice({ type, text });

    window.setTimeout(() => {
      setNotice(null);
    }, 3500);
  };

  const totalLessons = courses.reduce((total, course) => {
    return total + (course.lessons?.length || 0);
  }, 0);

  const totalQuestions = quizzes.reduce((total, quiz) => {
    return total + (quiz.questions?.length || 0);
  }, 0);

  const handleCategorySubmit = (event) => {
    event.preventDefault();

    if (!categoryForm.name.trim()) {
      showNotice("error", "Please enter a category name.");
      return;
    }

    addCategory(categoryForm);

    showNotice("ok", `"${categoryForm.name}" category was added successfully.`);
    setCategoryForm(emptyCategoryForm);
  };

  const handleCourseSubmit = (event) => {
    event.preventDefault();

    if (!courseForm.title.trim()) {
      showNotice("error", "Please enter a course title.");
      return;
    }

    if (!courseForm.categoryId) {
      showNotice("error", "Please select a course category.");
      return;
    }

    addCourse(courseForm);

    showNotice("ok", `"${courseForm.title}" course was added successfully.`);
    setCourseForm(emptyCourseForm);
  };

  const handleLessonSubmit = (event) => {
    event.preventDefault();

    if (!lessonForm.courseId) {
      showNotice("error", "Please select a course before adding a lesson.");
      return;
    }

    if (!lessonForm.title.trim()) {
      showNotice("error", "Please enter a lesson title.");
      return;
    }

    addLesson(lessonForm.courseId, {
      title: lessonForm.title,
      content: lessonForm.content,
      duration: lessonForm.duration,
    });

    showNotice("ok", `"${lessonForm.title}" lesson was added successfully.`);

    setLessonForm({
      ...emptyLessonForm,
      courseId: lessonForm.courseId,
    });
  };

  const handleQuizSubmit = (event) => {
    event.preventDefault();

    if (!quizForm.title.trim()) {
      showNotice("error", "Please enter a quiz title.");
      return;
    }

    addQuiz(quizForm);

    showNotice("ok", `"${quizForm.title}" quiz was added successfully.`);
    setQuizForm(emptyQuizForm);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();

    if (!questionForm.quizId) {
      showNotice("error", "Please select a quiz.");
      return;
    }

    if (!questionForm.text.trim()) {
      showNotice("error", "Please enter the question.");
      return;
    }

    const options = [
      questionForm.optionA,
      questionForm.optionB,
      questionForm.optionC,
      questionForm.optionD,
    ].filter((option) => option.trim());

    if (options.length < 2) {
      showNotice("error", "Please add at least two answer options.");
      return;
    }

    const correctIndex = Math.min(
      Number(questionForm.correctIndex) || 0,
      options.length - 1
    );

    const added = addQuestion(questionForm.quizId, {
      text: questionForm.text,
      options,
      correctIndex,
    });

    if (!added) {
      showNotice("error", "Question could not be added. Please try again.");
      return;
    }

    showNotice("ok", "Question was added to the selected quiz.");

    setQuestionForm({
      ...emptyQuestionForm,
      quizId: questionForm.quizId,
    });
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      "Reset all locally saved categories, courses, lessons and quizzes to original data?"
    );

    if (!confirmed) {
      return;
    }

    resetToSeed();
    showNotice("ok", "All local content was reset successfully.");
  };

  return (
    <div className="admin-page" data-testid="admin-page">
      <section className="admin-hero">
        <div className="admin-container admin-hero-layout">
          <div>
            <span className="admin-eyebrow">
              <span>✦</span>
              LearnSphere Administration
            </span>

            <h1>Content Studio</h1>

            <p>
              Manage learning categories, courses, lessons, quizzes, and
              questions. Your current changes are saved locally in the browser.
            </p>
          </div>

          <button
            type="button"
            className="admin-reset-button"
            onClick={handleReset}
            data-testid="admin-reset-btn"
          >
            <span>↻</span>
            Reset Local Data
          </button>
        </div>
      </section>

      <main className="admin-main">
        <div className="admin-container">
          <section className="admin-stats-grid">
            <article className="admin-stat-card">
              <span className="admin-stat-icon admin-stat-purple">◈</span>
              <div>
                <strong>{categories.length}</strong>
                <p>Categories</p>
              </div>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon admin-stat-cyan">▤</span>
              <div>
                <strong>{courses.length}</strong>
                <p>Courses</p>
              </div>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon admin-stat-orange">≡</span>
              <div>
                <strong>{totalLessons}</strong>
                <p>Lessons</p>
              </div>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon admin-stat-green">?</span>
              <div>
                <strong>{totalQuestions}</strong>
                <p>Quiz Questions</p>
              </div>
            </article>
          </section>

          <section className="admin-workspace">
            <div className="admin-tabs" role="tablist">
              {TABS.map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`admin-tab ${
                    activeTab === tab.id ? "admin-tab-active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="admin-workspace-content">
              <Notice notice={notice} />

              {activeTab === "categories" && (
                <section className="admin-content-grid">
                  <form
                    className="admin-form-card"
                    onSubmit={handleCategorySubmit}
                  >
                    <div className="admin-card-heading">
                      <span className="admin-card-icon">◈</span>
                      <div>
                        <h2>Create Category</h2>
                        <p>Organize courses into learning groups.</p>
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="category-name">Category Name</label>
                      <input
                        id="category-name"
                        type="text"
                        value={categoryForm.name}
                        placeholder="Example: Web Development"
                        onChange={(event) =>
                          setCategoryForm({
                            ...categoryForm,
                            name: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="category-icon">Category Symbol</label>
                      <select
                        id="category-icon"
                        value={categoryForm.icon}
                        onChange={(event) =>
                          setCategoryForm({
                            ...categoryForm,
                            icon: event.target.value,
                          })
                        }
                      >
                        <option value="◈">◈ General Learning</option>
                        <option value="⌘">⌘ Programming</option>
                        <option value="▤">▤ Study Material</option>
                        <option value="?">? Quiz Category</option>
                        <option value="✦">✦ Featured Category</option>
                      </select>
                    </div>

                    <button type="submit" className="admin-submit-button">
                      <span>+</span>
                      Add Category
                    </button>
                  </form>

                  <section className="admin-list-card">
                    <div className="admin-list-card-heading">
                      <div>
                        <span>Current Categories</span>
                        <h2>{categories.length} Categories Available</h2>
                      </div>
                    </div>

                    <div className="admin-item-list">
                      {categories.length === 0 ? (
                        <p className="admin-empty-message">
                          No categories added yet.
                        </p>
                      ) : (
                        categories.map((category) => (
                          <div className="admin-list-item" key={category.id}>
                            <span className="admin-list-item-icon">
                              {category.icon || "◈"}
                            </span>

                            <div>
                              <strong>{category.name}</strong>
                              <small>Slug: {category.slug}</small>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </section>
                </section>
              )}

              {activeTab === "courses" && (
                <section className="admin-course-layout">
                  <form
                    className="admin-form-card"
                    onSubmit={handleCourseSubmit}
                  >
                    <div className="admin-card-heading">
                      <span className="admin-card-icon">▤</span>
                      <div>
                        <h2>Create Course</h2>
                        <p>Add a new academic course or learning track.</p>
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="course-title">Course Title</label>
                      <input
                        id="course-title"
                        type="text"
                        value={courseForm.title}
                        placeholder="Example: BCA Semester 1"
                        onChange={(event) =>
                          setCourseForm({
                            ...courseForm,
                            title: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="course-subtitle">Short Description</label>
                      <input
                        id="course-subtitle"
                        type="text"
                        value={courseForm.subtitle}
                        placeholder="Example: Computer fundamentals and programming"
                        onChange={(event) =>
                          setCourseForm({
                            ...courseForm,
                            subtitle: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field-row">
                      <div className="admin-field">
                        <label htmlFor="course-category">Category</label>
                        <select
                          id="course-category"
                          value={courseForm.categoryId}
                          onChange={(event) =>
                            setCourseForm({
                              ...courseForm,
                              categoryId: event.target.value,
                            })
                          }
                        >
                          <option value="">Select category</option>

                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="admin-field">
                        <label htmlFor="course-level">Level</label>
                        <select
                          id="course-level"
                          value={courseForm.level}
                          onChange={(event) =>
                            setCourseForm({
                              ...courseForm,
                              level: event.target.value,
                            })
                          }
                        >
                          {LEVELS.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="admin-field-row">
                      <div className="admin-field">
                        <label htmlFor="course-duration">Study Duration</label>
                        <input
                          id="course-duration"
                          type="text"
                          value={courseForm.duration}
                          placeholder="Example: 32 Hours"
                          onChange={(event) =>
                            setCourseForm({
                              ...courseForm,
                              duration: event.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="admin-field">
                        <label htmlFor="course-instructor">
                          Teacher / Faculty
                        </label>
                        <input
                          id="course-instructor"
                          type="text"
                          value={courseForm.instructor}
                          placeholder="Example: Department Faculty"
                          onChange={(event) =>
                            setCourseForm({
                              ...courseForm,
                              instructor: event.target.value,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="course-cover">Cover Image URL (Optional)</label>
                      <input
                        id="course-cover"
                        type="url"
                        value={courseForm.cover}
                        placeholder="https://example.com/course-image.jpg"
                        onChange={(event) =>
                          setCourseForm({
                            ...courseForm,
                            cover: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="course-description">
                        Full Course Description
                      </label>
                      <textarea
                        id="course-description"
                        rows="4"
                        value={courseForm.description}
                        placeholder="Describe what students will learn in this course."
                        onChange={(event) =>
                          setCourseForm({
                            ...courseForm,
                            description: event.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <button type="submit" className="admin-submit-button">
                      <span>+</span>
                      Add Course
                    </button>
                  </form>

                  <form
                    className="admin-form-card"
                    onSubmit={handleLessonSubmit}
                  >
                    <div className="admin-card-heading">
                      <span className="admin-card-icon">≡</span>
                      <div>
                        <h2>Add Lesson</h2>
                        <p>Add lessons, topics, or study material to a course.</p>
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="lesson-course">Select Course</label>
                      <select
                        id="lesson-course"
                        value={lessonForm.courseId}
                        onChange={(event) =>
                          setLessonForm({
                            ...lessonForm,
                            courseId: event.target.value,
                          })
                        }
                      >
                        <option value="">Select course</option>

                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="lesson-title">Lesson Title</label>
                      <input
                        id="lesson-title"
                        type="text"
                        value={lessonForm.title}
                        placeholder="Example: Introduction to C Programming"
                        onChange={(event) =>
                          setLessonForm({
                            ...lessonForm,
                            title: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="lesson-content">Lesson Content</label>
                      <textarea
                        id="lesson-content"
                        rows="6"
                        value={lessonForm.content}
                        placeholder="Write the lesson explanation, notes, or instructions."
                        onChange={(event) =>
                          setLessonForm({
                            ...lessonForm,
                            content: event.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="lesson-duration">Estimated Duration</label>
                      <input
                        id="lesson-duration"
                        type="text"
                        value={lessonForm.duration}
                        placeholder="Example: 15 min"
                        onChange={(event) =>
                          setLessonForm({
                            ...lessonForm,
                            duration: event.target.value,
                          })
                        }
                      />
                    </div>

                    <button type="submit" className="admin-submit-button">
                      <span>+</span>
                      Add Lesson
                    </button>
                  </form>

                  <section className="admin-list-card admin-list-card-wide">
                    <div className="admin-list-card-heading">
                      <div>
                        <span>Current Courses</span>
                        <h2>{courses.length} Courses Available</h2>
                      </div>
                    </div>

                    <div className="admin-item-list">
                      {courses.length === 0 ? (
                        <p className="admin-empty-message">
                          No courses added yet.
                        </p>
                      ) : (
                        courses.map((course) => {
                          const category = categories.find(
                            (item) => item.id === course.categoryId
                          );

                          return (
                            <div className="admin-list-item" key={course.id}>
                              <span className="admin-list-item-icon">▤</span>

                              <div>
                                <strong>{course.title}</strong>
                                <small>
                                  {course.lessons?.length || 0} lessons ·{" "}
                                  {category?.name || "No category"} ·{" "}
                                  {course.level || "Beginner"}
                                </small>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </section>
                </section>
              )}

              {activeTab === "quizzes" && (
                <section className="admin-course-layout">
                  <form
                    className="admin-form-card"
                    onSubmit={handleQuizSubmit}
                  >
                    <div className="admin-card-heading">
                      <span className="admin-card-icon">?</span>
                      <div>
                        <h2>Create Quiz</h2>
                        <p>Create a quiz and connect it to an existing course.</p>
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="quiz-title">Quiz Title</label>
                      <input
                        id="quiz-title"
                        type="text"
                        value={quizForm.title}
                        placeholder="Example: C Programming Basics Quiz"
                        onChange={(event) =>
                          setQuizForm({
                            ...quizForm,
                            title: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="quiz-description">Description</label>
                      <textarea
                        id="quiz-description"
                        rows="4"
                        value={quizForm.description}
                        placeholder="Explain what concepts this quiz covers."
                        onChange={(event) =>
                          setQuizForm({
                            ...quizForm,
                            description: event.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="quiz-course">Linked Course</label>
                      <select
                        id="quiz-course"
                        value={quizForm.courseId}
                        onChange={(event) =>
                          setQuizForm({
                            ...quizForm,
                            courseId: event.target.value,
                          })
                        }
                      >
                        <option value="">No linked course</option>

                        {courses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="admin-submit-button">
                      <span>+</span>
                      Add Quiz
                    </button>
                  </form>

                  <form
                    className="admin-form-card"
                    onSubmit={handleQuestionSubmit}
                  >
                    <div className="admin-card-heading">
                      <span className="admin-card-icon">✓</span>
                      <div>
                        <h2>Add Question</h2>
                        <p>Add multiple-choice questions to a quiz.</p>
                      </div>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="question-quiz">Select Quiz</label>
                      <select
                        id="question-quiz"
                        value={questionForm.quizId}
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            quizId: event.target.value,
                          })
                        }
                      >
                        <option value="">Select quiz</option>

                        {quizzes.map((quiz) => (
                          <option key={quiz.id} value={quiz.id}>
                            {quiz.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="question-text">Question</label>
                      <textarea
                        id="question-text"
                        rows="3"
                        value={questionForm.text}
                        placeholder="Example: Which function is the entry point of a C program?"
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            text: event.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <div className="admin-field">
                      <label htmlFor="option-a">Option A</label>
                      <input
                        id="option-a"
                        type="text"
                        value={questionForm.optionA}
                        placeholder="First answer option"
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            optionA: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="option-b">Option B</label>
                      <input
                        id="option-b"
                        type="text"
                        value={questionForm.optionB}
                        placeholder="Second answer option"
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            optionB: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="option-c">Option C (Optional)</label>
                      <input
                        id="option-c"
                        type="text"
                        value={questionForm.optionC}
                        placeholder="Third answer option"
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            optionC: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="option-d">Option D (Optional)</label>
                      <input
                        id="option-d"
                        type="text"
                        value={questionForm.optionD}
                        placeholder="Fourth answer option"
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            optionD: event.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="admin-field">
                      <label htmlFor="correct-answer">Correct Answer</label>
                      <select
                        id="correct-answer"
                        value={questionForm.correctIndex}
                        onChange={(event) =>
                          setQuestionForm({
                            ...questionForm,
                            correctIndex: Number(event.target.value),
                          })
                        }
                      >
                        <option value={0}>Option A</option>
                        <option value={1}>Option B</option>
                        <option value={2}>Option C</option>
                        <option value={3}>Option D</option>
                      </select>
                    </div>

                    <button type="submit" className="admin-submit-button">
                      <span>+</span>
                      Add Question
                    </button>
                  </form>

                  <section className="admin-list-card admin-list-card-wide">
                    <div className="admin-list-card-heading">
                      <div>
                        <span>Current Quizzes</span>
                        <h2>{quizzes.length} Quizzes Available</h2>
                      </div>
                    </div>

                    <div className="admin-item-list">
                      {quizzes.length === 0 ? (
                        <p className="admin-empty-message">
                          No quizzes added yet.
                        </p>
                      ) : (
                        quizzes.map((quiz) => (
                          <div className="admin-list-item" key={quiz.id}>
                            <span className="admin-list-item-icon">?</span>

                            <div>
                              <strong>{quiz.title}</strong>
                              <small>
                                {quiz.questions?.length || 0} questions available
                              </small>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </section>
                </section>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}