/* =========================================================
   B.Sc IT — SEMESTER III (Reuses BCA Content where possible)
========================================================= */

import {
   databaseManagementSystems1,
   discreteMathematics,
   webApplicationDevelopment3, // BSc IT ની Scripting (JS) એ BCA ની Web Dev 3 (JS) જેવી જ છે
   webApplicationDevelopment3Lab,
} from "../../bca/sem3";

// SAD નું કન્ટેન્ટ BCA ના Sem 4 માં છે, એટલે ત્યાંથી લઈએ
import { systemAnalysisAndDesign as bcaSAD } from "../../bca/sem4";

// નવા સબ્જેક્ટ્સ (જે BCA માં નથી)
import { oopUsingCpp } from "./oop-using-cpp";
import { oopDbmsLab } from "./oop-dbms-lab";
import { ayurveda } from "./ayurveda";
import { dharmashastra } from "./dharmashastra";

function remap(subject, newId, newName, extra = {}) {
   if (!subject) return null;
   const originalDocId = subject.documentationId || subject.id;
   return {
      ...subject, id: newId, code: newId, name: newName, title: newName,
      documentationId: originalDocId,
      units: subject.units ? subject.units.map(u => ({ ...u, documentationId: originalDocId })) : [],
      ...extra,
   };
}

// નવા સબ્જેક્ટ્સ (સીધા Export)
export { oopUsingCpp, oopDbmsLab, ayurveda, dharmashastra };

// રિયુઝ થતા સબ્જેક્ટ્સ (remap વાપરીને)
export const dbms1 = remap(databaseManagementSystems1, "US03MABIT02", "Database Management Systems - I");
export const introductionToScriptingLanguage = remap(webApplicationDevelopment3, "US03IDBIT04", "Introduction to Scripting Language");
export const scriptingLanguageLab = remap(webApplicationDevelopment3Lab, "US03IDBIT05", "Introduction to Scripting Language Lab", { type: "lab" });
export const discreteMathematicsBit = remap(discreteMathematics, "US03AEBIT06", "Discrete Mathematics");
export const systemAnalysisAndDesign = remap(bcaSAD, "US03SEBIT07", "System Analysis and Design"); // BCA Sem 4 નું કન્ટેન્ટ વાપર્યું!