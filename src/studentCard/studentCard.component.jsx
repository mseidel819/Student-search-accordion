import React from "react";
import "./studentCard.style.css";

export const StudentCard = (props) => {
  const initialValue = 0;
  const sumWithInitial = props.student.grades.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue,
    initialValue
  );
  return (
    <div className="student">
      <img className="student-img" src={props.student.pic} />
      <div className="student-info">
        <h2>
          {props.student.firstName} {props.student.lastName}
        </h2>
        <p>Email: {props.student.email}</p>
        <p>Company: {props.student.company}</p>
        <p>Skill: {props.student.skill}</p>
        <p>Average: {sumWithInitial / props.student.grades.length}&#37;</p>
      </div>
    </div>
  );
};

//   render() {
//     console.log(this.state.students);
//     return (
//       <div className="student-container">
//         {this.state.students.map((student) => {
//           const initialValue = 0;
//           const sumWithInitial = student.grades.reduce(
//             (previousValue, currentValue) => +previousValue + +currentValue,
//             initialValue
//           );

//           return (
//             <div className="student" key={student.id}>
//               <img className="student-img" src={student.pic} />
//               <div className="student-info">
//                 <h2>
//                   {student.firstName} {student.lastName}
//                 </h2>
//                 <p>Email: {student.email}</p>
//                 <p>Company: {student.company}</p>
//                 <p>Skill: {student.skill}</p>
//                 <p>Average: {sumWithInitial / student.grades.length}&#37;</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default StudentCard;
