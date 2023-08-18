import { singledata, wait } from "@/fetchdata";
import React from "react";
import { Suspense } from "react";

const page = async ({ params }) => {
    const more = await singledata(params.id);
    return (
        <div>
            <h1>This is Explore page</h1>
            <Suspense
                fallback={
                    <img
                        height={100}
                        src="https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                    />
                }
            >
                {wait(2000)}
                <img
                    height={200}
                    src="https://images.unsplash.com/photo-1692283747616-b2209a722203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt=""
                />
            </Suspense>
            <h2>{JSON.stringify(more)}</h2>
        </div>
    );
};

export default page;
