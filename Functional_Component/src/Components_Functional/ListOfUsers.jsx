
function ListOfUsers(props) {
    console.log(props);
    const{userDetails} = props;
    return(
        <div>
            {
                userDetails.map((item)=>(
                    <div key={item.id}>
                        <h1>Name: {item.userName}</h1>
                        <h1>Age: {item.age}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default ListOfUsers;