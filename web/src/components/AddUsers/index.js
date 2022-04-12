import axios from "axios";
import React, { useState } from "react";

const AddUsers = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    const handleChangeName = e => {
        setName(e.target.value)
    }

    const handleChangeUserName = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        const user = {
            name,
            username
        };

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginLeft: "10px" }} className="ui left icon input">
                    <i className="users icon"></i>
                    <input type="text" placeholder="user" value={name} name="name" onChange={handleChangeName} />
                </div>
                <div style={{ marginLeft: "10px" }} className="ui left icon input">
                    <i className="user secret icon"></i>
                    <input type="text" placeholder="username" value={username} name="userName" onChange={handleChangeUserName} />
                </div>
                <button style={{ marginLeft: "10px" }} className="positive ui button" type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddUsers;