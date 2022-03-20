import React from "react";
import "./tag-box.style.css";

export const TagBox = (props) => {
  // console.log(props);

  return (
    <div className="tag-box">
      <div>
        {/* {props.tags
          .filter((t) => t.studentId === props.student.id)
          .map((tag) => {
            return (
              <p key={`tagValue${tag.value}`} className="tag">
                {tag.value}
              </p>
            );
          })} */}
        {props.student.tag ? (
          <p key={`tagValue${props.student.id}`} className="tag">
            {props.student.tag}
          </p>
        ) : null}
      </div>
      <input
        id={props.student.id}
        className="tag-input"
        type="text"
        placeholder="Add a tag"
        onKeyDown={props.handleChange}
      />
    </div>
  );
};
