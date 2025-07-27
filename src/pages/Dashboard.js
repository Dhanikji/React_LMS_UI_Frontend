import React from "react";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import TodoList from "../components/TodoList";
import courses from "../data/courses";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="main-content">
        <Header />
        <div className="dashboard-content">
          <h2>Your Courses</h2>
          <div className="course-grid">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
