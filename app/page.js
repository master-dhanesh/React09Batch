"use client";
import { asyncGetPopularMovies } from "@/store/Actions/tmdbActions";
import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const page = () => {
    const { data } = useSelector((state) => state.tmdbReducer);
    const dispatch = useDispatch();
    console.log(data);

    useEffect(() => {
        if (data.length === 0) dispatch(asyncGetPopularMovies());
    }, []);
    return (
        <div>
            {data &&
                data.map((d) => {
                    return (
                        <div key={d.id}>
                            <img
                                height={200}
                                src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                                alt=""
                            />
                            <h3>{d.title}</h3>
                            <Link href={`/details/${d.id}`}>Details</Link>
                        </div>
                    );
                })}
        </div>
    );
};

export default page;
