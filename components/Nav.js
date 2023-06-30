import Link from "next/link";

const Nav = () => {
    return (
        <ul>
            <li>
                <Link href="/home/timeline">Timeline</Link>
            </li>
            <li>
                <Link href="/home/posts">Posts</Link>
            </li>
        </ul>
    );
};

export default Nav;
