"use client";
import axios from "@/utils/axios";
import React, { useEffect } from "react";

const page = () => {
    const getData = async () => {
        try {
            const { data } = await axios.get("/find");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const sendData = async () => {
        try {
            const { data } = await axios.post("/create", {
                username: "Ankur",
                password: "123456",
            });
            console.log(data);
        } catch (error) {
            alert(error.response.data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>API EXAMPLE</h1>
            <button onClick={sendData}>Create User</button>
        </div>
    );
};

export default page;
