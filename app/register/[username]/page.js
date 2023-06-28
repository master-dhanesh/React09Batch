"use client";
import React from "react";

const page = (props) => {
    const { params } = props;

    return (
        <div>
            <h1>User Registered.</h1>
            <h2>{params.username}</h2>
        </div>
    );
};

export default page;
