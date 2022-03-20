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
    const { students, searchField, tagField, tags } = this.state;

    // console.log(this.state.tagField);

    const filteredStudents = students.filter((student) => {
      const fullName = student.firstName + " " + student.lastName;
      // console.log(fullName);

      return fullName.toLowerCase().includes(searchField.toLowerCase());
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
                  // handleChange={(e) => {
                  //   // console.log(e);
                  //   if (e.key === "Enter") {
                  //     this.setState({
                  //       tags: [
                  //         ...this.state.tags,
                  //         { studentId: student.id, value: e.target.value },
                  //       ],
                  //     });
                  //     e.target.value = "";
                  //   }
                  //   // console.log(tag, "hhh");
                  // }}

                  handleChange={(e) => {
                    // console.log(e.target.id);
                    if (e.key === "Enter") {
                      // 1. Make a shallow copy of the items
                      let students = [...this.state.students];
                      // 2. Make a shallow copy of the item you want to mutate
                      let student = { ...students[e.target.id - 1] };
                      // 3. Replace the property you're intested in
                      student.tag = e.target.value;
                      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                      students[e.target.id - 1] = student;
                      // 5. Set the state to our new copy
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
