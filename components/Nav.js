import Link from "next/link";

const Nav = () => {
    return (
        <ul>
            <li>
                <Link href="/">Home </Link>
            </li>
            <li>
                <Link href="/home">Homepage </Link>
            </li>
            <li>
                <Link href="/about">About </Link>
            </li>
        </ul>
    );
};

export default Nav;
