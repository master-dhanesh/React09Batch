"use client";
import Show from "@/components/Show";
import { useState } from "react";

const page = () => {
    const [show, setShow] = useState(false);

    const ShowHandler = () => {
        setShow(!show);
    };

    return (
        <div>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <button onClick={ShowHandler} className="ms-3 btn btn-primary">
                {show ? "Hide" : "Show"}
            </button>
            <hr />
            {show && <Show />}
        </div>
    );
};

export default page;
