// import StudentCard from "./studentCard/studentCard.component";
// import { CardList } from "./card-list/card-list.component";
import { SearchBox } from "./search-box/search-box.component";
import { StudentCard } from "./studentCard/studentCard.component";

import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      DataisLoaded: false,
      searchField: "",
      tags: [],
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
    const { students, searchField } = this.state;
    const filteredStudents = students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(searchField.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <div className="app-container">
          <SearchBox
            placeholder="Search by name"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />

          <div className="student-container">
            {filteredStudents.map((student) => {
              return <StudentCard key={student.id} student={student} />;
            })}
          </div>
        </div>
        {/* <CardList students={filteredStudents}></CardList> */}
      </div>
    );
  }
}

export default App;
