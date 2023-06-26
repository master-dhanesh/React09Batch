"use client";
import { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const page = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [active, setActive] = useState(null);

    const ActiveUser = (idx) => {
        setActive(idx);
        setUsername(users[idx].username);
        setEmail(users[idx].email);
    };

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

            <Show
                active={active}
                users={users}
                setUsers={setUsers}
                ActiveUser={ActiveUser}
            />
        </>
    );
};

export default page;
