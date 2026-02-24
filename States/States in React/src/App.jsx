import { Component } from "react";
import Counter from "./Components/Counter";
import Mode from "./Components/Mode";
import "./App.css";
import Hide from "./Components/Hide";
import Dashboard from "./Components/Dashboard";
import Calculator from "./Components/Calculator";

class App extends Component {
  state = {isShow:true}
  render() {
    return (
      <div>

        {/* <Counter/>  */}

        {/* <Mode/> */}

        {/* {this.state.isShow && <Hide/>}
        <button onClick={()=>this.setState({isShow:!this.state.isShow})}>
          {this.state.isShow?"Show":"Hide"}
        </button> */}
        
        {/* <Dashboard/> */}

        <Calculator/>
      </div>
    )
  }
}

export default App;