"use client";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const page = ({ params }) => {
    const [detail, setdetail] = useState(null);
    const GetMovieDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
            );
            setdetail(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!detail) GetMovieDetails();
    }, []);
    return <div>{JSON.stringify(detail)}</div>;
};

export default page;
