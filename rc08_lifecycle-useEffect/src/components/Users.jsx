import { useState } from "react";
import { useEffect } from "react";



const Users = () => {

    const [users,setUsers] = useState()

    const getUsers = () =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    
    useEffect(() => {
        getUsers();
    }, []);

    console.log(users)

  return (
    <div>
        <h1>User List</h1>
        {/* <button className="btn btn-success" onClick={getUsers} >Get Users</button> */}
        <div className="row" >
            <div className="col" >
                <img src="" alt="" />
                <h6>Name</h6>

            </div>

        </div>
    </div>
  )
}

export default Users;