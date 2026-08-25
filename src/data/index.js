/* =========================================================
   LEARNSPHERE — COURSES DATABASE
   Single entry point. Import everything from here.
========================================================= */

import { bca } from "./courses/bca";
import { bscIt } from "./courses/bsc-it";
import { btech } from "./courses/btech";
import { mca } from "./courses/mca";
import { mscIt } from "./courses/msc-it";
import { mtech } from "./courses/mtech";

/* =========================================================
   COURSES
========================================================= */

export const coursesData = {
  bca,
  "bsc-it": bscIt,
  btech,
  mca,
  "msc-it": mscIt,
  mtech,
};

/* =========================================================
   AVAILABLE COURSES  (auto-generated — no duplication)
========================================================= */

export const availableCourses = Object.values(coursesData).map((course) => ({
  id: course.id,
  label: course.shortName,
  name: course.name,
  level: course.level,
}));

/* =========================================================
   COURSE GROUPS
========================================================= */

export const courseGroups = [
  {
    id: "bachelor",
    title: "Bachelor's Programs",
    description: "Undergraduate degree programs",
    courses: availableCourses.filter((course) => course.level === "bachelor"),
  },
  {
    id: "master",
    title: "Master's Programs",
    description: "Postgraduate degree programs",
    courses: availableCourses.filter((course) => course.level === "master"),
  },
];

/* =========================================================
   RE-EXPORTS
========================================================= */

export * from "./helpers";
export * from "./selectors";
export * from "./shared";