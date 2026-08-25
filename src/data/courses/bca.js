/* =========================================================
   COURSE — BCA
   Bachelor of Computer Applications
   All 8 semesters migrated to /subjects/bca/**
========================================================= */

import { createSemester } from "../helpers";

/* ---------------- SUBJECTS BY SEMESTER ---------------- */

import * as SEM1 from "../subjects/bca/sem1";
import * as SEM2 from "../subjects/bca/sem2";
import * as SEM3 from "../subjects/bca/sem3";
import * as SEM4 from "../subjects/bca/sem4";
import * as SEM5 from "../subjects/bca/sem5";
import * as SEM6 from "../subjects/bca/sem6";
import * as SEM7 from "../subjects/bca/sem7";
import * as SEM8 from "../subjects/bca/sem8";

/* =========================================================
   COURSE DEFINITION
========================================================= */

export const bca = {
  id: "bca",
  name: "Bachelor of Computer Applications",
  shortName: "BCA",
  level: "bachelor",
  description:
    "Build strong foundations in programming, software development, databases, web technologies, artificial intelligence, and computer science.",
  totalSemesters: 8,
  accent: "purple",

  semesters: [
    /* ===================================================
       SEMESTER I
    =================================================== */

    createSemester(
      1,
      "Semester I",
      "Programming, web development, office automation, communication, Indian knowledge systems, and computer organization.",
      [
        SEM1.programmingFundamentalsUsingC,
        SEM1.programmingFundamentalsUsingCLab,
        SEM1.webApplicationDevelopment1,
        SEM1.webApplicationDevelopment1Lab,
        SEM1.accountingAndOfficeAutomation,
        SEM1.officeAutomationLab,
        SEM1.communicationSkillsInEnglish1,
        SEM1.indianKnowledgeSystems,
        SEM1.fundamentalsOfComputerOrganization,
      ]
    ),

    /* ===================================================
       SEMESTER II
    =================================================== */

    createSemester(
      2,
      "Semester II",
      "Advanced C programming, web development, digital electronics, communication, environment studies, and IT fundamentals.",
      [
        SEM2.advancedCProgramming,
        SEM2.advancedCProgrammingLab,
        SEM2.webApplicationDevelopment2,
        SEM2.webApplicationDevelopment2Lab,
        SEM2.digitalElectronics,
        SEM2.digitalElectronicsLab,
        SEM2.communicationSkillsInEnglish2,
        SEM2.environmentStudies,
        SEM2.informationTechnologyFundamentals2,
      ]
    ),

    /* ===================================================
       SEMESTER III
    =================================================== */

    createSemester(
      3,
      "Semester III",
      "Data structures, database management, JavaScript, discrete mathematics, e-commerce, and Indian Knowledge Systems.",
      [
        /* Core */
        SEM3.fundamentalsOfDataStructure,
        SEM3.databaseManagementSystems1,
        SEM3.dataStructuresAndDbmsLab,
        SEM3.webApplicationDevelopment3,
        SEM3.webApplicationDevelopment3Lab,
        SEM3.discreteMathematics,
        SEM3.eCommerce,

        /* IKS — Choose Any One */
        ...SEM3.iksElectives,
      ]
    ),

    /* ===================================================
       SEMESTER IV
    =================================================== */

    createSemester(
      4,
      "Semester IV",
      "Java programming, operating systems, PL/SQL, project management, system analysis, and personality development.",
      [
        /* Core */
        SEM4.objectOrientedProgramming1,
        SEM4.operatingSystems,
        SEM4.javaAndOperatingSystemsLab,
        SEM4.databaseManagementSystems2,
        SEM4.databaseManagementSystems2Lab,
        SEM4.softwareProjectManagement,
        SEM4.systemAnalysisAndDesign,

        /* Value-Added — Choose Any One */
        ...SEM4.valueAddedElectives,
      ]
    ),

    /* ===================================================
       SEMESTER V
    =================================================== */

    createSemester(
      5,
      "Semester V",
      "Computer networks, Visual Basic .NET, Python programming, Java web development, and artificial intelligence.",
      [
        SEM5.visualProgramming,
        SEM5.visualProgrammingLab,
        SEM5.pythonProgramming,
        SEM5.pythonProgrammingLab,
        SEM5.objectOrientedProgramming2,
        SEM5.objectOrientedProgramming2Lab,
        SEM5.computerNetworks,
        SEM5.introductionToArtificialIntelligence,
      ]
    ),

    /* ===================================================
       SEMESTER VI
    =================================================== */

    createSemester(
      6,
      "Semester VI",
      "Software engineering, ASP.NET, PHP scripting, business communication, and internship project development.",
      [
        SEM6.advancedWebDevelopmentTechnology,
        SEM6.advancedWebDevelopmentTechnologyLab,
        SEM6.scriptingWithPhp1,
        SEM6.scriptingWithPhp1Lab,
        SEM6.softwareEngineering,
        SEM6.businessCommunicationAndEtiquettes,
        SEM6.internship,
      ]
    ),

    /* ===================================================
       SEMESTER VII
    =================================================== */

    createSemester(
      7,
      "Semester VII (Without Research)",
      "Generative AI, cyber security, advanced PHP development, practical learning, and on-job training.",
      [
        SEM7.basicsOfGenerativeAi,
        SEM7.basicsOfGenerativeAiLab,
        SEM7.scriptingWithPhp2,
        SEM7.scriptingWithPhp2Lab,
        SEM7.fundamentalsOfCyberSecurity,
        SEM7.onJobTraining,
      ]
    ),

    /* ===================================================
       SEMESTER VIII
    =================================================== */

    createSemester(
      8,
      "Semester VIII (Without Research)",
      "Machine learning, cloud computing, data analytics using R, practical learning, and on-job industry training.",
      [
        SEM8.basicsOfMachineLearning,
        SEM8.basicsOfMachineLearningLab,
        SEM8.dataAnalyticsUsingR,
        SEM8.dataAnalyticsUsingRLanguageLab,
        SEM8.cloudComputing,
        SEM8.onJobTraining,
      ]
    ),
  ],
};