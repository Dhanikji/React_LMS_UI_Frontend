import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="course-card-link">
      <div className="course-card">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
