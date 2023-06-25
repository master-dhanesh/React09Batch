import React from "react";

const Create = (props) => {
    const {
        users,
        setUsers,
        active,
        setActive,
        username,
        setUsername,
        email,
        setEmail,
    } = props;

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (username.trim() === "" || email.trim() === "") {
            alert("makde poore inputs fill ke");
            return;
        }

        const newuser = { username, email };
        setUsers([...users, newuser]);
        setUsername("");
        setEmail("");
    };

    const UpdateHandler = () => {
        if (username.trim() === "" || email.trim() === "") {
            alert("makde poore inputs fill ke");
            return;
        }

        const copyusers = [...users];
        const oldUser = { ...copyusers[active] };
        const updatedUser = { username, email };
        copyusers[active] = { ...oldUser, ...updatedUser };
        setUsers(copyusers);
        setActive(null);
        setUsername("");
        setEmail("");
    };

    return (
        <form>
            <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
            />
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder="Email"
            />

            {active !== null ? (
                <button type="button" onClick={UpdateHandler}>
                    Update
                </button>
            ) : (
                <button type="button" onClick={SubmitHandler}>
                    Submit
                </button>
            )}
        </form>
    );
};

export default Create;
