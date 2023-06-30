import Link from "next/link";

const page = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link href="/login">Login</Link>
            <br />
            <Link href="/register">Register</Link>
        </div>
    );
};

export default page;
