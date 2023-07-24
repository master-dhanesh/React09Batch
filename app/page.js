"use client";
import React, { use, useState } from "react";
import axios from "axios";

const getData = async () => {
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        return data;
    } catch (error) {
        return error;
    }
};

const page = (props) => {
    const [users, setusers] = useState(use(getData()) || []);
    // const getData = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             "https://jsonplaceholder.typicode.com/users"
    //         );
    //         setusers(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div>
            {users.map((user) => {
                return <p key={user.id}>{user.name}</p>;
            })}
        </div>
    );
};

export default page;
