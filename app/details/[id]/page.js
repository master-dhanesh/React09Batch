"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
const page = () => {
    const params = useParams();
    const [detail, setdetail] = useState(null);
    console.log(params);
    const GetDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (detail === null) GetDetails();
    }, []);

    return <div>page</div>;
};

export default page;
