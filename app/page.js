"use client";
import React from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Show from "@/components/Show";
const page = () => {
    return (
        <Provider store={store}>
            <div className="container mt-5 p-5 bg-light">
                <h1>Redux Toolkit</h1>
                <hr />
                <Show />
            </div>
        </Provider>
    );
};

export default page;
