/* =========================================================
   B.Sc IT — SEMESTER I (Reuses BCA Sem 1 Content)
========================================================= */

import {
    programmingFundamentalsUsingC,
    programmingFundamentalsUsingCLab,
    webApplicationDevelopment1,
    webApplicationDevelopment1Lab,
    accountingAndOfficeAutomation,
    officeAutomationLab,
    communicationSkillsInEnglish1,
    indianKnowledgeSystems,
    fundamentalsOfComputerOrganization,
} from "../../bca/sem1";

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

export const programmingUsingC = remap(programmingFundamentalsUsingC, "US01MABIT01", "Fundamentals of Programming Using C");
export const programmingUsingCLab = remap(programmingFundamentalsUsingCLab, "US01MABIT02", "Fundamentals of Programming Using C Lab", { type: "lab" });
export const basicsOfWebDesigning = remap(webApplicationDevelopment1, "US01MIBIT03", "Basics of Web Designing");
export const basicsOfWebDesigningLab = remap(webApplicationDevelopment1Lab, "US01MIBIT04", "Basics of Web Designing Lab", { type: "lab" });
export const officeAutomationTools = remap(accountingAndOfficeAutomation, "US01IDBIT05", "Office Automation Tools");
export const officeAutomationToolsLab = remap(officeAutomationLab, "US01IDBIT06", "Office Automation Tools Lab", { type: "lab" });
export const communicationSkillsEnglish1 = remap(communicationSkillsInEnglish1, "US01AEBIT07", "Communication Skills in English - I");
export const indianKnowledgeSystemsBit = remap(indianKnowledgeSystems, "US01IKBIT08", "Indian Knowledge Systems");
export const computerOrgArchitecture = remap(fundamentalsOfComputerOrganization, "US01SEBIT09", "Fundamentals of Computer Organization and Architecture");