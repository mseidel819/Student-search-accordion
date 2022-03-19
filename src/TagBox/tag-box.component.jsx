import React from "react";
import "./tag-box.style.css";

export const TagBox = (props) => {
  console.log(props);
  return (
    <div>
      {props.tag
        .filter((t) => t.studentId === props.student.id)
        .map((tag) => {
          return <p className="student-tags">"{tag.value}"</p>;
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
