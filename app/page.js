"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { DataContext } from "./context";

const page = () => {
    const router = useRouter();
    const [Data, setData] = useContext(DataContext);

    const GetTrending = async () => {
        const { data } = await axios.get(
            "https://api.unsplash.com/photos?client_id=Cjg971k-TOJCHGcnCsd4G-Fnk92KMy2Z03E1eNolX58&page=1"
        );
        setData(data);
        router.push("/list");
    };
    return (
        <div>
            <button onClick={GetTrending}>Trending Images</button>
            <Link href="/search">Search Images</Link>
        </div>
    );
};

export default page;
