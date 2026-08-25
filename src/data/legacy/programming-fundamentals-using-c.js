import { defineSubject, createUnit } from "../helpers";
import { buildDocPath } from "../shared";

const topic = (topicId) =>
  buildDocPath("bca", 1, "programming-in-c", topicId);

export const programmingFundamentalsUsingC = defineSubject({
  id: "US01MABCA01",
  code: "US01MABCA01",
  name: "Programming Fundamentals Using C",
  documentationId: "programming-in-c",
  path: topic("introduction-to-c"),

  units: [
    createUnit("bca-c-unit-1", "Unit 1",
      "Concept of Algorithm, Flowchart and Languages",
      { path: topic("introduction-to-c") }),

    createUnit("bca-c-unit-2", "Unit 2",
      "Basics of Programming",
      { path: topic("operators-in-c") }),

    createUnit("bca-c-unit-3", "Unit 3",
      "Decision Making, Loops and Arrays",
      { path: topic("functions-in-c") }),

    createUnit("bca-c-unit-4", "Unit 4",
      "Strings and Library Functions",
      { path: topic("pointers-in-c") }),
  ],
});