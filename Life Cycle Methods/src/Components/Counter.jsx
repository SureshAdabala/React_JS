import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {count:0}
        console.log("Constructor Method Calling")
    }

    componentDidMount(){
        console.log("Mount Method");
    }

    componentDidUpdate(){
        console.log("Update Method");
    }

    componentWillUnmount(){
        console.log("Unmount Method");
    }
        render() {
        console.log("Render Calling")
        return (
             <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
             </div>
        );
    }
}

export default Counter;