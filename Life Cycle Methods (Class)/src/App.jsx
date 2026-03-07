import { Component } from "react";
import Counter from "./Components/Counter";
import DigitalClock from "./Components/DigitalClock";

class App extends Component {
  state = {isShow:true}
  render() {
    return (
      <div>
        {this.state.isShow && <DigitalClock/>}
       <button onClick={()=>this.setState({isShow:!this.state.isShow})}>
        {this.state.isShow?"Hide":"Show"}
       </button>
      </div>
    );
  }
}
export default App;