/* =========================================================
   B.Sc IT — SEMESTER IV (Reuses BCA Content)
========================================================= */

// 1. BCA ના સબ્જેક્ટ્સ ઇમ્પોર્ટ કરો
import {
   objectOrientedProgramming1,
   databaseManagementSystems2,
   databaseManagementSystems2Lab,
   softwareProjectManagement,
} from "../../bca/sem4";

import { eCommerce as bcaEcommerce } from "../../bca/sem3";

// 2. B.Sc IT ના નવા સબ્જેક્ટ્સ ઇમ્પોર્ટ કરો
// ⚠️ ચેક કરજો કે sem4 ફોલ્ડરમાં આ 5 ફાઇલો હાજર છે!
import { dataStructuresAndAlgorithms } from "./data-structures-and-algorithms";
import { javaDsaLab } from "./java-dsa-lab";
import { currentTrendsInIt } from "./current-trends-in-it";
import { ipdc2 } from "./ipdc-2";
import { nccArmy2 } from "./ncc-army-2";

/* ---------------------------------------------------------
   Helper: Smart Remap Function
--------------------------------------------------------- */
function remap(subject, newId, newName, extra = {}) {
   if (!subject) return null;
   const originalDocId = subject.documentationId || subject.id;
   return {
      ...subject,
      id: newId,
      code: newId,
      name: newName,
      title: newName,
      documentationId: originalDocId,
      units: subject.units ? subject.units.map(u => ({ ...u, documentationId: originalDocId })) : [],
      ...extra,
   };
}

/* ---------------------------------------------------------
   BSc-IT Semester 4 Subjects (SPU 2024-25)
--------------------------------------------------------- */

// 🔹 રિયુઝ થતા સબ્જેક્ટ્સ (remap વાપરીને)
export const oopUsingJava = remap(objectOrientedProgramming1, "US04MABIT01", "Object Oriented Programming using Java");
export const dbms2 = remap(databaseManagementSystems2, "US04MIBIT04", "Database Management System - II");
export const dbms2Lab = remap(databaseManagementSystems2Lab, "US04MIBIT05", "Database Management Systems – II LAB", { type: "lab" });
export const softwareProjectManagementBit = remap(softwareProjectManagement, "US04AEBIT06", "Software Project Management");
export const eCommerceBit = remap(bcaEcommerce, "US04SEBIT07", "E - Commerce", { wide: true });

// 🔹 નવા સબ્જેક્ટ્સ (સીધા Export કરો)
export {
   dataStructuresAndAlgorithms,
   javaDsaLab,
   currentTrendsInIt,
   ipdc2,
   nccArmy2
};