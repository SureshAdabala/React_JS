import { Component } from "react";

class DigitalClock extends Component {

    state = {date: new Date()}

    componentDidMount(){
        setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }
    render() {
        return (
             <h1>{this.state.date.toLocaleTimeString()}</h1>
        );
    }
}
export default DigitalClock;