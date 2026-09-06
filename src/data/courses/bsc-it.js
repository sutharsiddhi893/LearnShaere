/* =========================================================
   COURSE — B.Sc IT
========================================================= */

import { createSemester } from "../helpers";

import * as SEM1 from "../subjects/bsc-it/sem1";
import * as SEM2 from "../subjects/bsc-it/sem2";
import * as SEM3 from "../subjects/bsc-it/sem3";
import * as SEM4 from "../subjects/bsc-it/sem4";
import * as SEM5 from "../subjects/bsc-it/sem5";
import * as SEM6 from "../subjects/bsc-it/sem6";
import * as SEM7 from "../subjects/bsc-it/sem7";
import * as SEM8 from "../subjects/bsc-it/sem8";

export const bscIt = {
  id: "bsc-it",
  name: "Bachelor of Science in Information Technology",
  shortName: "B.Sc IT",
  level: "bachelor",
  description:
    "Comprehensive program covering programming, web technologies, databases, networking, and emerging IT domains.",
  totalSemesters: 8,
  accent: "blue",

  semesters: [
    /* ===================================================
       SEMESTER I   ✅
    =================================================== */
    createSemester(
      1,
      "Semester I",
      "Programming in C, web designing, office automation, communication skills, Indian knowledge systems, and computer organization.",
      [
        SEM1.programmingUsingC,
        SEM1.programmingUsingCLab,
        SEM1.basicsOfWebDesigning,
        SEM1.basicsOfWebDesigningLab,
        SEM1.officeAutomationTools,
        SEM1.officeAutomationToolsLab,
        SEM1.communicationSkillsEnglish1,
        SEM1.indianKnowledgeSystemsBit,
        SEM1.computerOrgArchitecture,
      ]
    ),

    /* ===================================================
       SEMESTER II   ✅
    =================================================== */
    createSemester(
      2,
      "Semester II",
      "Advanced C, advanced web designing, digital electronics, communication skills, environmental studies, and IT fundamentals.",
      [
        SEM2.advancedProgrammingUsingC,
        SEM2.advancedProgrammingUsingCLab,
        SEM2.advancedWebDesigning,
        SEM2.advancedWebDesigningLab,
        SEM2.digitalElectronicsBit,
        SEM2.digitalElectronicsLabBit,
        SEM2.communicationSkillsInEnglish2Bit,
        SEM2.environmentalStudiesBit,
        SEM2.informationTechnologyFundamentals2Bit,
      ]
    ),

    /* ===================================================
       SEMESTER III   ✅
    =================================================== */
    createSemester(
      3,
      "Semester III",
      "Object Oriented Programming using C++, DBMS, Scripting Languages (JavaScript & DOM), Discrete Mathematics, System Analysis & Design, and Ayurveda.",
      [
        SEM3.oopUsingCpp,
        SEM3.dbms1,
        SEM3.oopDbmsLab,
        SEM3.introductionToScriptingLanguage,
        SEM3.scriptingLanguageLab,
        SEM3.discreteMathematicsBit,
        SEM3.systemAnalysisAndDesign,
        SEM3.ayurveda,
        SEM3.dharmashastra,
      ]
    ),

    /* ===================================================
       SEMESTER IV   ✅ (અહીંથી ફિક્સ કર્યું)
    =================================================== */
    createSemester(
      4,
      "Semester IV",
      "Java, Data Structures, PL/SQL, Software Project Management, E-Commerce, Current Trends, and IPDC/NCC.",
      [
        SEM4.oopUsingJava,
        SEM4.dataStructuresAndAlgorithms,
        SEM4.javaDsaLab,
        SEM4.dbms2,
        SEM4.dbms2Lab,
        SEM4.softwareProjectManagementBit,
        SEM4.eCommerceBit,
        SEM4.currentTrendsInIt,
        SEM4.ipdc2,
        SEM4.nccArmy2,
      ]
    ),

    /* ===================================================
       SEMESTER V   ✅
    =================================================== */
    createSemester(
      5,
      "Semester V",
      "Visual Programming (VB.NET), Operating Systems, PHP, Advanced Java, and Software Engineering.",
      [
        SEM5.fundamentalsOfVisualProgramming,
        SEM5.operatingSystems,
        SEM5.vbnetOsLab,
        SEM5.openSourcePhp,
        SEM5.phpLab,
        SEM5.advancedJavaProgramming,
        SEM5.advancedJavaLab,
        SEM5.softwareEngineeringFundamentals,
      ]
    ),

    /* ===================================================
       SEMESTER VI   ✅
    =================================================== */
    createSemester(
      6,
      "Semester VI",
      "ASP.NET, Computer Networks, Python, Artificial Intelligence, and Internship.",
      [
        SEM6.aspNetProgrammingCSharp,
        SEM6.computerNetworks,
        SEM6.aspNetLab,
        SEM6.programmingInPython,
        SEM6.pythonLab,
        SEM6.introductionToArtificialIntelligence,
        SEM6.internship,
      ]
    ),
    /* ===================================================
       SEMESTER VII   ✅
    =================================================== */
    createSemester(
      7,
      "Semester VII",
      "Fundamentals of Machine Learning, Full Stack Web Application Development, Practical based on ML and Full Stack, IoT Fundamentals, Practical based on IoT Fundamentals, and On Job Training.",
      [
        SEM7.fundamentalsOfMachineLearning,
        SEM7.fullStackWebDevelopment,
        SEM7.mlFullstackLab,
        SEM7.iotFundamentals,
        SEM7.iotFundamentalsLab,
        SEM7.onJobTraining,
      ]
    ),
    /* ===================================================
       SEMESTER VIII   ✅ FINAL FIX
    =================================================== */
    createSemester(
      8,
      "Semester VIII (Without Research)",
      "Mobile Application Development (Android), Network Security, Data Analytics using R, and On Job Training.",
      [
        SEM8.basicsOfMobileApplicationDevelopment,
        SEM8.networkSecurity,
        SEM8.mobileAppDevLab,       // 🔑 આ મોબાઇલ એપનો લેબ છે (US08HMABIT03)
        SEM8.dataAnalyticsUsingR,
        SEM8.dataAnalyticsUsingRLab,// 🔑 આ R નો લેબ છે (US08HMIBIT05)
        SEM8.onJobTraining,
      ]
    ),
  ],
};
