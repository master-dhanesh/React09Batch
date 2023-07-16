"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
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
        <div className="container mt-5 p-5 bg-light">
            <ul>
                {images
                    ? images.map((image, i) => (
                          <li key={image.id}>
                              <img
                                  height={100}
                                  src={image.download_url}
                                  alt=""
                              />
                              <a href={`/details/${image.id}`}>
                                  {image.author}
                              </a>
                          </li>
                      ))
                    : "loading..."}
            </ul>
        </div>
    );
};

export default page;
