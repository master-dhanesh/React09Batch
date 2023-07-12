"use client";
import axios from "axios";
import React, { useState } from "react";

const Serach = () => {
    const [slug, setSlug] = useState("");
    const [Images, setImages] = useState([]);

    let searchrender = <p>Loading...</p>;
    if (Images.length > 0) {
        searchrender = Images.map((d, i) => {
            return (
                <li key={d.id}>
                    <img src={d.links.download} alt="" />
                    <h3>{d.user.first_name}</h3>
                </li>
            );
        });
    }

    const SearchHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(
                `https://api.unsplash.com/search/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1&query=${slug}`
            );
            setImages(data.results);
            setSlug("");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="list">
            <h1>Search Image</h1>
            <form onSubmit={SearchHandler}>
                <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    type="text"
                />
                <button>Search</button>
            </form>
            <hr />
            <ul>{searchrender}</ul>
        </div>
    );
};

export default Serach;
