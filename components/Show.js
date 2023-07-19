import React from "react";
import { increment } from "@/store/reducers/counterReducer";
import { useSelector, useDispatch } from "react-redux";
const Show = () => {
    const d = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const ChangeHandler = () => {
        dispatch(increment(5));
    };
    return (
        <div>
            <h1>Show</h1>
            <h2>{d.value}</h2>
            <button onClick={ChangeHandler}>click</button>
        </div>
    );
};

export default Show;
