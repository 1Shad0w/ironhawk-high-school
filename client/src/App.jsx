import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Academics from "./pages/Academics.jsx";
import Athletics from "./pages/Athletics.jsx";
import SportDetail from "./pages/SportDetail.jsx";
import StudentLife from "./pages/StudentLife.jsx";
import Campus from "./pages/Campus.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";
import Contact from "./pages/Contact.jsx";
import Enroll from "./pages/Enroll.jsx";
import Portal from "./pages/Portal.jsx";
import Calendar from "./pages/Calendar.jsx";
import BellSchedule from "./pages/BellSchedule.jsx";
import LunchMenu from "./pages/LunchMenu.jsx";
import Directory from "./pages/Directory.jsx";
import Attendance from "./pages/Attendance.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/athletics" element={<Athletics />} />
          <Route path="/athletics/:slug" element={<SportDetail />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/news" element={<NewsEvents />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/bell-schedule" element={<BellSchedule />} />
          <Route path="/lunch-menu" element={<LunchMenu />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
