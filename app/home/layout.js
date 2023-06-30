"use client";
import Nav from "@/components/Nav";

const Authenticate = (props) => {
    const { children } = props;
    return (
        <div>
            <Nav />
            {children}
        </div>
    );
};

export default Authenticate;
