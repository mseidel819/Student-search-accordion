import React from "react";
import "./studentCard.style.css";
class StudentCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.students);
        this.setState({
          students: json.students,
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  render() {
    console.log(this.state.students);
    return (
      <div className="student-container">
        {this.state.students.map((student) => {
          const initialValue = 0;
          const sumWithInitial = student.grades.reduce(
            (previousValue, currentValue) => +previousValue + +currentValue,
            initialValue
          );

          return (
            <div className="student" key={student.id}>
              <img className="student-img" src={student.pic} />
              <div className="student-info">
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {sumWithInitial / student.grades.length}&#37;</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default StudentCard;
