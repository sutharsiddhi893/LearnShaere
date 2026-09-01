import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Header from "./layouts/Header/Header";
import { AppProvider } from "./context/AppContext";
import MainLayout from "./layouts/MainLayout/MainLayout";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Quizzes from "./pages/Quizzes/Quizzes";
import QuizPlay from "./pages/QuizPlay/QuizPlay";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/NotFound/NotFound";
import PrivacyPolicy from "./pages/Privacy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";
import HelpCenter from "./pages/HelpCenter/HelpCenter";

import Semester from "./pages/Semester/Semester";
import SubjectDocumentation from "./pages/Subject/SubjectDocumentation";
import ProgrammingLab from "./pages/ProgrammingLab/ProgrammingLab";
import Resources from "./pages/Resources/Resources";
import PlacementHub from "./pages/Placement/PlacementHub";
import SearchPage from "./pages/Search/SearchPage";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Profile from "./pages/Profile/Profile";
import BCASemesters from "./pages/BCASemesters";

import "./App.css";

function CourseRouter() {
  const { courseId } = useParams();

  const academicCourseIds = [
    "bca",
    "bsc-it",
    "mca",
    "msc-it",
    "btech",
    "mtech",
  ];

  if (academicCourseIds.includes(courseId)) {
    return <Semester />;
  }

  return <CourseDetail />;
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Routes>
          <Route element={<MainLayout />}>
            {/* Existing course catalog */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />

            {/* Existing individual course details */}
            <Route path="/courses/:courseId" element={<CourseRouter />} />

            {/* New college LMS paths */}
            <Route
              path="/courses/:courseId/semester/:semesterNumber"
              element={<Semester />}
            />

            <Route
              path="/courses/:courseId/semester/:semesterNumber/subject/:subjectId"
              element={<SubjectDocumentation />}
            />

            <Route
              path="/courses/:courseId/semester/:semesterNumber/subject/:subjectId/topic/:topicId"
              element={<SubjectDocumentation />}
            />

            <Route
              path="/editor/:languageId"
              element={<ProgrammingLab />}
            />

            {/* Quizzes */}
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quizzes/:quizId" element={<QuizPlay />} />

            {/* Programming lab */}
            <Route path="/programming-lab" element={<ProgrammingLab />} />
            <Route path="/programming-lab/:languageId" element={<ProgrammingLab />} />

            {/* Static pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:resourceCategory" element={<Resources />} />

            <Route path="/placement-hub" element={<PlacementHub />} />

            <Route path="/bookmarks" element={<Bookmarks />} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<NotFound />} />

            <Route path="/bca/semester" element={<BCASemesters />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;