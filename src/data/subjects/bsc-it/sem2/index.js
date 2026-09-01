/* =========================================================
   B.Sc IT — SEMESTER II (Reuses BCA Sem 2 Content)
========================================================= */

import {
    advancedCProgramming,
    advancedCProgrammingLab,
    webApplicationDevelopment2,
    webApplicationDevelopment2Lab,
    digitalElectronics,
    digitalElectronicsLab,
    communicationSkillsInEnglish2,
    environmentStudies,
    informationTechnologyFundamentals2,
} from "../../bca/sem2";

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

export const advancedProgrammingUsingC = remap(advancedCProgramming, "US02MABIT01", "Advanced Programming using C");
export const advancedProgrammingUsingCLab = remap(advancedCProgrammingLab, "US02MABIT02", "Advanced Programming using C Lab", { type: "lab" });
export const advancedWebDesigning = remap(webApplicationDevelopment2, "US02MIBIT03", "Advanced Web Designing");
export const advancedWebDesigningLab = remap(webApplicationDevelopment2Lab, "US02MIBIT04", "Advanced Web Designing Lab", { type: "lab" });
export const digitalElectronicsBit = remap(digitalElectronics, "US02IDBIT05", "Digital Electronics");
export const digitalElectronicsLabBit = remap(digitalElectronicsLab, "US02IDBIT06", "Digital Electronics Lab", { type: "lab" });
export const communicationSkillsInEnglish2Bit = remap(communicationSkillsInEnglish2, "US02AEBIT07", "Communication Skills in English - II");
export const environmentalStudiesBit = remap(environmentStudies, "US02VABIT08", "Environmental Studies");
export const informationTechnologyFundamentals2Bit = remap(informationTechnologyFundamentals2, "US02SEBIT09", "Information Technology Fundamentals - II", { wide: true });