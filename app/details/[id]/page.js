"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const Details = () => {
    const { id } = useParams();

    const getDetials = async () => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/id/${id}/info`
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDetials();
    }, []);
    return <div>Details</div>;
};

export default Details;
