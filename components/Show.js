import React, { useEffect, useState } from "react";

const Show = () => {
    const [msg, setMsg] = useState("This is initial text of Show");

    const ChangeMsg = () => {
        setMsg("Show component text updated!");
    };

    useEffect(() => {
        console.log("Component Created!");

        return () => {
            console.log("Component Destoryed!");
        };
    }, []);

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={ChangeMsg} className="ms-3 btn btn-primary">
                Change Text
            </button>
        </div>
    );
};

export default Show;
