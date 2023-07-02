"use client";
import { useRef, useState } from "react";

const page = () => {
    const firstRef = useRef(null);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const ChangeHandler = (e) => {
        const f = firstRef.current;
        if (f.value.length < 4) {
            f.style.outline = "1px solid red";
        } else {
            f.style.outline = "none";
        }
        setFirst(e.target.value);
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log({ first, last });
    };
    return (
        <div>
            <h1>Landing Page</h1>

            <form onSubmit={SubmitHandler}>
                <input
                    ref={firstRef}
                    name="first"
                    onChange={ChangeHandler}
                    value={first}
                    type="text"
                    placeholder="first name"
                />
                <input
                    name="last"
                    onChange={(e) => setLast(e.target.value)}
                    value={last}
                    type="text"
                    placeholder="last name"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default page;
