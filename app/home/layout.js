"use client";
import Link from "next/link";

const Authenticate = (props) => {
    const { children } = props;
    return (
        <div>
            <ul>
                <li>
                    <Link href="/home/timeline">Timeline</Link>
                </li>
                <li>
                    <Link href="/home/posts">Posts</Link>
                </li>
            </ul>
            {children}
        </div>
    );
};

export default Authenticate;
