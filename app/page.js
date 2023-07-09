"use client";
import { useContext } from "react";
import { CentralizedData } from "./context";

const page = () => {
    const [data, setData] = useContext(CentralizedData);
    return (
        <div>
            <h1>Page.js Parent</h1>
            <p>{data}</p>
            <button onClick={() => setData("change Data")}>
                Change Central Data
            </button>
        </div>
    );
};

export default page;
