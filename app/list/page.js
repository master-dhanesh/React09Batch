"use client";
import React, { useContext } from "react";
import { DataContext } from "../context";

const Trending = () => {
    const [data, setData] = useContext(DataContext);
    console.log(data);
    return <div>Trending</div>;
};

export default Trending;
