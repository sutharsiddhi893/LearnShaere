import { coursesData } from "./index";
import { getAllSubjects, getSubjectMcqs } from "./selectors";

// Derived from the canonical curriculum. No quiz content is stored separately.
export const curriculumQuizzes = Object.values(coursesData).flatMap((course) =>
  getAllSubjects(course.id).flatMap((subject) => {
    const questions = getSubjectMcqs(subject).map((mcq, index) => ({
      id: `${subject.id}-${mcq.topicId}-${index}`,
      text: mcq.question,
      options: mcq.options,
      correctIndex: mcq.answerIndex,
      explanation: mcq.explanation || null,
    }));
    return questions.length ? [{
      id: `${course.id}-${subject.semesterNumber}-${subject.id}`,
      title: subject.name,
      description: `${course.shortName} · ${subject.semesterTitle}`,
      courseId: course.id,
      subjectId: subject.id,
      semesterNumber: subject.semesterNumber,
      questions,
    }] : [];
  })
);

export const getCurriculumQuiz = (quizId) =>
  curriculumQuizzes.find((quiz) => quiz.id === quizId) || null;
