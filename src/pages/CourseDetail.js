import React from "react";
import { useParams } from "react-router-dom";
import mockCourses from "../data/mockCourses";
import "./CourseDetail.css";

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
    </div>
  );
};

export default CourseDetail;
