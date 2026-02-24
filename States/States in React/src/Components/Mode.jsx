import { Component } from "react";


class Mode extends Component {
    state = {isLight:true}
    render() {
        return (
             <div className={this.state.isLight?"light":"dark"}>
                <h1>{this.state.isLight?"This is Light Mode":"This is Dark Mode"}</h1>
                <button onClick={()=>this.setState({isLight:!this.state.isLight})}>{this.state.isLight?"Dark":"Light"}</button>
             </div>
        );
    }
}

export default Mode;