"use client";
import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const page = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [active, setActive] = useState(null);

    const DeleteHandler = (idx) => {
        const filteredUsers = users.filter((ele, i) => i !== idx);
        setUsers(filteredUsers);
    };

    const ActiveUser = (idx) => {
        setActive(idx);
        setUsername(users[idx].username);
        setEmail(users[idx].email);
    };

    console.log(users);
    let userslist = <h1>No User Present</h1>;
    if (users.length > 0) {
        userslist = users.map((ele, idx) => (
            <li key={idx}>
                {ele.username} | {ele.email} |{" "}
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => DeleteHandler(idx)}
                >
                    ❌
                </span>
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => ActiveUser(idx)}
                >
                    ✏️
                </span>
            </li>
        ));
    }

    return (
        <>
            <Create
                users={users}
                setUsers={setUsers}
                active={active}
                setActive={setActive}
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
            />
            <hr />
            <ol>{userslist}</ol>
            <hr />
            <Show />
        </>
    );
};

export default page;
