"use client";
import { createContext, useState } from "react";

export const CentralizedData = createContext(null); //context init.

const CentralData = (props) => {
    const [data, setData] = useState(
        "This is Centralized Information and should be accessed by all components."
    );
    return (
        <CentralizedData.Provider value={[data, setData]}>
            {props.children}
        </CentralizedData.Provider>
    );
};

export default CentralData;
