
function StudentCard(props) {
    const{name,age,batch} = props;
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>Batch: {batch}</h1>
        </div>
    )
}

export default StudentCard;