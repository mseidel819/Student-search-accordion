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
      tagField: "",
    };
  }

  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((json) => {
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
    const { students, searchField, tagField } = this.state;

    const filteredStudents = students.filter((student) => {
      const fullName = student.firstName + " " + student.lastName;

      if (student.tag) {
        const bigTag = student.tag.join("");
        console.log(bigTag);
        return (
          bigTag.toLowerCase().includes(tagField.toLowerCase()) &&
          fullName.toLowerCase().includes(searchField.toLowerCase())
        );
      }
      if (!student.tag && !this.state.tagField) {
        return (
          student && fullName.toLowerCase().includes(searchField.toLowerCase())
        );
      }
    });

    return (
      <div className="App">
        <div className="app-container">
          <SearchBox
            placeholder="Search by name"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
          <SearchBox
            placeholder="Search by tag"
            handleChange={(e) => this.setState({ tagField: e.target.value })}
          />
          <div className="student-container">
            {filteredStudents.map((student) => {
              return (
                <StudentCard
                  handleChange={(e) => {
                    if (e.key === "Enter") {
                      let students = [...this.state.students];
                      let student = { ...students[e.target.id - 1] };
                      student.tag = student.tag
                        ? [...student.tag, e.target.value]
                        : [e.target.value];
                      students[e.target.id - 1] = student;
                      this.setState({ students });
                      e.target.value = "";
                    }
                  }}
                  key={student.id}
                  student={student}
                  tags={this.state.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
