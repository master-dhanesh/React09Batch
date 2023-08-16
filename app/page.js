"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const page = () => {
    const [posts, setposts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const getmoreposts = async () => {
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${posts.length}`
            );
            data.length === 0 ? setHasMore(false) : "";
            setposts([...posts, ...data]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (posts.length === 0) getmoreposts();
    }, []);
    return (
        <div>
            <h1>Posts</h1>
            <ul className="list-group">
                <InfiniteScroll
                    dataLength={posts.length}
                    next={getmoreposts}
                    hasMore={hasMore}
                    loader={<h1>Loading...</h1>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {posts.map((p, idx) => (
                        <li className="mb-5 alert alert-dark " key={idx}>
                            {p.title}
                        </li>
                    ))}
                </InfiniteScroll>
            </ul>
        </div>
    );
};

export default page;
