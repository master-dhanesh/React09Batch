const Show = (props) => {
    const { active, users, setUsers, ActiveUser } = props;
    const DeleteHandler = (idx) => {
        const filteredUsers = users.filter((ele, i) => i !== idx);
        setUsers(filteredUsers);
    };

    let userslist = <h1>No User Present</h1>;
    if (users.length > 0) {
        userslist = users.map((ele, idx) => (
            <li key={idx}>
                {ele.username} | {ele.email} |{" "}
                {active === null ? (
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => DeleteHandler(idx)}
                    >
                        ❌
                    </span>
                ) : (
                    ""
                )}
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => ActiveUser(idx)}
                >
                    ✏️
                </span>
            </li>
        ));
    }

    return <ol>{userslist}</ol>;
};

export default Show;
