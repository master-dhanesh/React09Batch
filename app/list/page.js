"use client";
import React, { useContext } from "react";
import { DataContext } from "../context";

const Trending = () => {
    const [data, setData] = useContext(DataContext);

    let listrender = <p>Loading...</p>;
    if (data.length > 0) {
        listrender = data.map((d, i) => {
            return (
                <li key={d.id}>
                    <img src={d.links.download} alt="" />
                    <h3>{d.user.first_name}</h3>
                </li>
            );
        });
    }

    return (
        <div className="list">
            <h1>Trending Images</h1>
            <ul>{listrender}</ul>
        </div>
    );
};

export default Trending;
