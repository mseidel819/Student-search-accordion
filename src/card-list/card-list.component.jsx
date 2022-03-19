import React from "react";
import "./card-list.style.css";
import { StudentCard } from "../studentCard/studentCard.component.jsx";

export const CardList = (props) => (
  <div className="student-container">
    {props.students.map((student) => (
      <StudentCard key={student.id} student={student} />
    ))}
  </div>
);
