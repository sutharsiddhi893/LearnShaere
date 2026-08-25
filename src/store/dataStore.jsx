import { useState, useEffect, useCallback } from "react";
import { SEED } from "../data/legacy/seed";

const LS_ADDITIONS = "studynest:additions:v1";
const LS_BOOKMARKS = "studynest:bookmarks:v1";
const LS_COMPLETED = "studynest:completed:v1";
const LS_RECENT = "studynest:recent:v1";
const LS_QUIZ_SCORES = "studynest:quiz:v1";

function readLS(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}
function writeLS(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// Merge SEED with user-added subjects/topics from localStorage
export function getMergedData() {
  const additions = readLS(LS_ADDITIONS, { subjects: [] });
  const semesters = SEED.semesters.map((s) => ({ ...s, subjects: [...s.subjects] }));
  for (const add of additions.subjects) {
    const target = semesters.find((s) => s.id === add.semesterId);
    if (target) target.subjects.push(add.subject);
  }
  return { semesters, quizzes: SEED.quizzes, questions: SEED.questions };
}

export function findSubject(semesters, subjectId) {
  for (const sem of semesters) {
    const sub = sem.subjects.find((x) => x.id === subjectId);
    if (sub) return { subject: sub, semester: sem };
  }
  return { subject: null, semester: null };
}

export function findTopic(semesters, topicId) {
  for (const sem of semesters) {
    for (const sub of sem.subjects) {
      for (const unit of sub.units || []) {
        const t = (unit.topics || []).find((tp) => tp.id === topicId);
        if (t) return { topic: t, unit, subject: sub, semester: sem };
      }
    }
  }
  return {};
}

// Flat list of all topics for search
export function allTopics(semesters) {
  const out = [];
  for (const sem of semesters) {
    for (const sub of sem.subjects) {
      for (const unit of sub.units || []) {
        for (const t of unit.topics || []) {
          out.push({ topic: t, unit, subject: sub, semester: sem });
        }
      }
    }
  }
  return out;
}

// Hooks
export function useBookmarks() {
  const [items, setItems] = useState(() => readLS(LS_BOOKMARKS, []));
  useEffect(() => writeLS(LS_BOOKMARKS, items), [items]);
  const toggle = useCallback((topicId) => {
    setItems((prev) => prev.includes(topicId) ? prev.filter((x) => x !== topicId) : [...prev, topicId]);
  }, []);
  const has = useCallback((id) => items.includes(id), [items]);
  return { items, toggle, has };
}

export function useCompleted() {
  const [items, setItems] = useState(() => readLS(LS_COMPLETED, []));
  useEffect(() => writeLS(LS_COMPLETED, items), [items]);
  const mark = useCallback((id) => setItems((p) => p.includes(id) ? p : [...p, id]), []);
  const unmark = useCallback((id) => setItems((p) => p.filter((x) => x !== id)), []);
  const has = useCallback((id) => items.includes(id), [items]);
  return { items, mark, unmark, has };
}

export function useRecent() {
  const [items, setItems] = useState(() => readLS(LS_RECENT, []));
  useEffect(() => writeLS(LS_RECENT, items), [items]);
  const push = useCallback((topicId) => {
    setItems((prev) => [topicId, ...prev.filter((x) => x !== topicId)].slice(0, 8));
  }, []);
  return { items, push };
}

export function useQuizScores() {
  const [scores, setScores] = useState(() => readLS(LS_QUIZ_SCORES, {}));
  useEffect(() => writeLS(LS_QUIZ_SCORES, scores), [scores]);
  const save = useCallback((quizId, score, total) => {
    setScores((prev) => ({ ...prev, [quizId]: { score, total, at: Date.now() } }));
  }, []);
  return { scores, save };
}

// Admin — add subject
export function addSubject(semesterId, subject) {
  const additions = readLS(LS_ADDITIONS, { subjects: [] });
  additions.subjects.push({ semesterId, subject });
  writeLS(LS_ADDITIONS, additions);
}

export function clearAdditions() { writeLS(LS_ADDITIONS, { subjects: [] }); }

export function getAdditions() { return readLS(LS_ADDITIONS, { subjects: [] }); }
