import { coursesData, getAllSubjects, getSubjectMcqs, getSubjectTopics } from "./index";

describe("canonical curriculum", () => {
  test("has unique, reachable populated subjects", () => {
    const ids = new Set();
    ["bca", "bsc-it", "msc-it"].forEach((courseId) => {
      const course = coursesData[courseId];
      expect(course).toBeTruthy();
      getAllSubjects(courseId).forEach((subject) => {
        const id = `${courseId}/${subject.semesterNumber}/${subject.id}`;
        if (ids.has(id)) throw new Error(`duplicate curriculum ID: ${id}`);
        ids.add(id);
        expect(Array.isArray(subject.units)).toBe(true);
        expect(subject.units.length).toBeGreaterThan(0);
        if (subject.hasContent) expect(getSubjectTopics(subject).length).toBeGreaterThan(0);
      });
    });
    expect(ids.size).toBe(145);
  });

  test("keeps every canonical MCQ playable", () => {
    Object.keys(coursesData).forEach((courseId) => getAllSubjects(courseId).forEach((subject) => {
      getSubjectMcqs(subject).forEach((question) => {
        expect(question.question).toBeTruthy();
        expect(question.options.length).toBeGreaterThan(1);
        expect(question.answerIndex).toBeGreaterThanOrEqual(0);
        expect(question.answerIndex).toBeLessThan(question.options.length);
      });
    }));
  });
});
