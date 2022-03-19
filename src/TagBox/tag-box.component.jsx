import React from "react";
import "./tag-box.style.css";

export const TagBox = (props) => {
  // console.log(props);

  return (
    <div>
      {props.tags
        .filter((t) => t.studentId === props.student.id)
        .map((tag) => {
          return (
            <p key={tag.studentId} className="student-tags">
              {tag.value}
            </p>
          );
        })}

      <input
        className="tag-input"
        type="text"
        placeholder="Add a tag"
        onKeyDown={props.handleChange}
      />
    </div>
  );
};
