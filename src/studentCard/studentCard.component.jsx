import React from "react";
import "./studentCard.style.css";

export const StudentCard = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  const initialValue = 0;
  const sumWithInitial = props.student.grades.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue,
    initialValue
  );
  return (
    <div className="student-with-accordion">
      <div className="student">
        <div className="student-all-info">
          <img className="student-img" src={props.student.pic} />
          <div className="student-info">
            <h2>
              {props.student.firstName.toUpperCase()}{" "}
              {props.student.lastName.toUpperCase()}
            </h2>
            <p>Email: {props.student.email}</p>
            <p>Company: {props.student.company}</p>
            <p>Skill: {props.student.skill}</p>
            <p>Average: {sumWithInitial / props.student.grades.length}&#37;</p>
          </div>
        </div>
        <div
          className="student-expander"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "-" : "+"}
        </div>
      </div>

      <div>
        {isActive && (
          <div className="grades">
            {props.student.grades.map((grade, index) => {
              return (
                <p>
                  Test {index + 1}: {grade}&#37;
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
