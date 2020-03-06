import React from "react";
import "./App.css";
import Customer from "./components/component.js";

const customers = [
  {
    id: 1,
    image: "http://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "961212",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    image: "http://placeimg.com/64/64/2",
    name: "김상순",
    birthday: "970506",
    gender: "여자",
    job: "프로그래머"
  },
  {
    id: 3,
    image: "http://placeimg.com/64/64/3",
    name: "양만택",
    birthday: "771212",
    gender: "남자",
    job: "사업가"
  }
];

class App extends React.Component {
  render() {
    return customers.map(c => {
      return (
        <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        ></Customer>
      );
    });
  }
}

export default App;
