import React from "react";
import "./tag-box.style.css";

export const TagBox = (props) => {
  // console.log(props);

  return (
    <div className="tag-box">
      <div>
        {props.student.tag
          ? props.student.tag.map((tag) => {
              return (
                <p key={`tagValue${props.student.id}${tag}`} className="tag">
                  {tag}
                </p>
              );
            })
          : null}
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
