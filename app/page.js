"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const page = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);

    const GetImages = async () => {
        try {
            const { data } = await axios.get(
                `https://picsum.photos/v2/list?page=${page}&limit=10`
            );
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePageClick = (e) => {
        setPage(e.selected + 1);
    };

    useEffect(() => {
        GetImages();
    }, [page]);

    return (
        <div className="container mt-5 p-5 bg-light">
            <ul className="d-flex flex-wrap">
                {images
                    ? images.map((image, i) => (
                          <li className="me-3 mb-3" key={image.id}>
                              <img
                                  height={100}
                                  src={image.download_url}
                                  alt=""
                              />{" "}
                              <br />
                              <Link href={`/details/${image.id}`}>
                                  {image.author}
                              </Link>
                          </li>
                      ))
                    : "loading..."}
            </ul>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={10}
                previousLabel="< previous"
            />
        </div>
    );
};

export default page;
