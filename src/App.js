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
      tagField: "",
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
    const { students, searchField, tagField, tags } = this.state;

    // console.log(this.state);

    const filteredStudents = students.filter((student) => {
      const fullName = student.firstName + " " + student.lastName;

      if (student.tag) {
        // return student.tag.map((tag) => {
        //   tag.toLowerCase().includes(tagField.toLowerCase()) &&
        //     fullName.toLowerCase().includes(searchField.toLowerCase());
        // });

        const bigTag = student.tag.join("");
        console.log(bigTag);
        return (
          // student.tag[0]
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

    // const filteredStudents = students.filter((student) => {
    //   const fullName = student.firstName + " " + student.lastName;
    //   // console.log(fullName);

    //   return;
    // });

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
        {/* <CardList students={filteredStudents}></CardList> */}
      </div>
    );
  }
}

export default App;
