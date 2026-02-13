import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Delay time (1 seconds)
const timeout = 1000;

// Helper function to add delay
const lazyWithDelay = (importFunc) => {
  return lazy(() =>
    new Promise((resolve) => {
      setTimeout(() => resolve(importFunc()), timeout);
    })
  );
};

// Lazy-loaded pages with delay
const Home = lazyWithDelay(() => import("../components/Home"));
const About = lazyWithDelay(() => import("../components/About"));
const Contact = lazyWithDelay(() => import("../components/Contact"));

function AppRoutes() {
  return (
    <>
      <div className="btn-group">
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/about">
          <button className="btn">About</button>
        </Link>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="page-box">
        <Suspense fallback={<h3>Loading page...</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default AppRoutes;
