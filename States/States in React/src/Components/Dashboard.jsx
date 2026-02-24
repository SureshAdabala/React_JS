import { Component } from "react";

class Dashboard extends Component {
    state = {dash:true}
    render() {
        return (
             <div>
                <h1>{this.state.dash?"This is Login Dashboard":"This is Logout DashBoard"}</h1>
                <button onClick={()=>this.setState({dash:!this.state.dash})}>
                    {this.state.dash?"LogOut":"LogIn"}
                </button>
             </div>
        );
    }
}

export default Dashboard;