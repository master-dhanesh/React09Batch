"use client";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, asyncIncrementBy5 } from "@/store/actions/index";
const page = () => {
    const { value } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const IncrementHandler = () => {
        dispatch(increment(1));
    };

    const DecrementHandler = () => {
        dispatch(decrement(1));
    };

    const IncrementBy5Handler = () => {
        dispatch(asyncIncrementBy5());
    };
    return (
        <div className="container mt-5 p-5 bg-light">
            <h1>Homepage</h1>
            <h2>{value}</h2>
            <button
                className=" me-3 btn btn-success"
                onClick={IncrementHandler}
            >
                Increment By 1
            </button>
            <button className="btn btn-danger me-3" onClick={DecrementHandler}>
                Decrement By 1
            </button>

            <button className="btn btn-warning" onClick={IncrementBy5Handler}>
                Increment By 5
            </button>
        </div>
    );
};

export default page;
