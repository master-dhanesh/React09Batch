"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
    const [Images, setImages] = useState([]);
    // const GetImages = () => {
    //     axios
    //         .get("https://picsum.photos/v2/list?page=2&limit=10")
    //         .then((res) => console.log(res.data))
    //         .catch((err) => console.log(err));
    // };

    const GetImages = async () => {
        try {
            const { data } = await axios.get(
                "https://picsum.photos/v2/list?page=2&limit=10"
            );
            console.log(data);
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetImages();
    }, []);

    const renderImages = Images.map((image, i) => {
        return (
            <div key={image.id}>
                <img height={200} src={image.download_url} alt="" />
                <p>{image.author}</p>
            </div>
        );
    });
    return (
        <div>
            <h1>Homepage</h1>
            {/* <button onClick={GetImages}>Get Images</button> */}
            <hr />
            {renderImages}
        </div>
    );
};

export default page;

// https://picsum.photos/v2/list?page=1&limit=10
