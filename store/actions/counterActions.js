import { incrementby5 } from "../reducers/counterReducer";

export const asyncIncrementBy5 = () => (dispatch, getState) => {
    setTimeout(() => {
        dispatch(incrementby5());
    }, 2000);
    // console.log(dispatch);
    // console.log(getState());
};
