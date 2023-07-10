"use client";
import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataStore = (props) => {
    const [data, setData] = useState([]);
    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataStore;
