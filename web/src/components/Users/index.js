import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AddUsers from "../AddUsers";


const URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(URL).then((response) => {
            setUser(response.data);
        })
    }, []);

    return (
        <div>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(item => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;