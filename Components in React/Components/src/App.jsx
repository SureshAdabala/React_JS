// import StudentCard from "./components/StudentCard";

// function App() {
//   return (
//     <StudentCard/>
//   )
// }

// export default App

import React from "react";
import 'App.css';
import StudentCard from "./components/StudentCard";

class App extends React.Component {
  render(){
    return(
      <div>
        <StudentCard name="suresh" age={22} batch="65R" isStudent={true}/>
        <StudentCard name="Kishore" age={21} batch="65R" isStudent={false}/>
      </div>
    )
  }
}

export default App;
