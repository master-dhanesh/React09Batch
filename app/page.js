"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncaddmovies } from "@/store/Actions/movieActions";
import { changepage, removeerrors } from "@/store/Reducers/movieReducer";
import { toast } from "react-toastify";

export const metadata = {
    title: "Tmdb Homepage",
};

const page = () => {
    const dispatch = useDispatch();
    const { movies, page, errors } = useSelector((state) => state.movieReducer);
    console.log(errors);

    if (errors.length > 0) {
        errors.map((e, i) => {
            toast.error(e);
        });
        dispatch(removeerrors());
    }

    useEffect(() => {
        // if (movies.length === 0) dispatch(asyncaddmovies());
        dispatch(asyncaddmovies());
    }, [page]);

    return (
        <div>
            <h1>Navbar component</h1>
            <h1>Search Header component</h1>
            <hr />
            <div className="d-flex container p-5 mt-3 flex-wrap">
                {movies.map((m, i) => {
                    return (
                        <div className="me-3 mb-3" key={m.id}>
                            <img
                                height={200}
                                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                                alt=""
                            />
                            <p>
                                <Link href={`/${m.id}`}>{m.title}</Link>
                            </p>
                        </div>
                    );
                })}
            </div>
            <hr />
            <div className=" my-5 text-center paginate">
                <button onClick={() => dispatch(changepage(-1))}>
                    Previous
                </button>
                <span className="h1">{page}</span>
                <button onClick={() => dispatch(changepage(1))}>Next</button>
            </div>
        </div>
    );
};

export default page;
