// Creation of Components Class
// Component Name -> StudentCard
// render() -> return the Jsx code and it shows the result
// this.props.name -> Older Methods
// const {name,age,batch} = {this.name}

import React from "react";

class StudentCard extends React.Component {
    render() {
        const {name,age,batch,isStudent} = this.props;
        console.log(this.props) //Props is Immutable(does not update) and holds the object data in components
        return(
            <div style={{border:"3px solid blue"}}>
                <h1>Name: {name}</h1> 
                <h1>Age: {age}</h1>
                <h1>Batch :{batch}</h1>
                <h1>isStudent: {isStudent?"Yes":"No"}</h1>
            </div>
        )
    }
}

export default StudentCard;