import React from "react";
import { TagBox } from "../TagBox/tag-box.component";
import "./studentCard.style.css";

export const StudentCard = (props) => {
  const [isActive, setIsActive] = React.useState(false);

  // console.log(props);
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

            <TagBox
              student={props.student}
              tags={props.tags}
              handleChange={props.handleChange}
            />
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
                <div className="test-grade">
                  <p>Test {index + 1}:</p>
                  <p>{grade}&#37;</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
