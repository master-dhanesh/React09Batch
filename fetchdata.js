import axios from "axios";

export const singledata = async (id) => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
    );
    await wait(2000);
    return data;
};

export const wait = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};
