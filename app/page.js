"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

const page = () => {
    const getData = async () => {
        try {
            const { data } = await axios.get("/api");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const postData = async () => {
        try {
            const { data } = await axios.post("/api", {
                name: "Kuch Bhhi",
                skill: "kuch nahiii",
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        postData();
        getData();
    }, []);

    return <div>page</div>;
};

export default page;
