"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncaddmovies } from "@/store/Actions/movieActions";
const page = () => {
    const dispatch = useDispatch();
    const { movies, page } = useSelector((state) => state.movieReducer);

    console.log(movies);
    useEffect(() => {
        if (movies.length === 0) dispatch(asyncaddmovies());
    }, []);

    return (
        <div>
            <h1>Navbar component</h1>
            <h1>Search Header component</h1>
            <hr />
            {movies.map((m, i) => {
                return (
                    <div key={m.id}>
                        <img
                            height={200}
                            src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                            alt=""
                        />
                        <p>
                            <Link href={`/${m.id}`}>{m.title}</Link>
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default page;
