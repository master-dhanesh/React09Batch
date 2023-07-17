"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { use, useState } from "react";

async function getDets(id) {
    try {
        const { data } = await axios.get(`https://picsum.photos/id/${id}/info`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const Details = () => {
    const { id } = useParams();
    const [det, setdet] = useState(use(getDets(id)));

    // const getDetials = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             `https://picsum.photos/id/${id}/info`
    //         );
    //         console.log(data);
    //         setdet(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    // getDetials();
    // }, [d]);
    return (
        <div>
            <h1>Details</h1>

            <img width={200} src={det && det.download_url} alt="" />
        </div>
    );
};

export default Details;
