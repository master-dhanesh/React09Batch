import axios from "axios";
import React, { useEffect, useState } from "react";

const Show = () => {
    const [images, setImages] = useState([]);

    const GetImages = async () => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=2&limit=10`
            );
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetImages();
    }, []);

    return (
        <div className="container mt-5 bg-light p-5">
            <hr />
            {JSON.stringify(images)}
        </div>
    );
};

export default Show;
