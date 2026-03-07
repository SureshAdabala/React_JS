import { useState } from "react";
import Counter from "./Components_Functional/Counter";
import Counter from "./Components_Functional/Counters";
import StudentCard from "./Components_Functional/StudentCard";
import LoginLogout from "./Components_Functional/LoginLogout";
import ListOfUsers from "./Components_Functional/ListOfUsers";

const userDetails = [
  {
    id:101,
    userName : "Suresh",
    age : "22"
  },
  {
    id:102,
    userName : "Kishore",
    age : "30"
  },
  {
    id:103,
    userName : "Adithya",
    age : "34"
  }
]




function App() {
  return(
    <>
    {/* <StudentCard name="Suresh" age={22} batch={"65R"}/> */}
    {/* <StudentCard name="Kishore" age={21} batch={"65R"}/> */}
    {/* <StudentCard/> */}

    {/* <Counter/> */}

    {/* <LoginLogout/> */}

    {/* <ListOfUsers userDetails={userDetails}/> */}

    <Counter2/>
    </>
  )
}

export default App;