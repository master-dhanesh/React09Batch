"use client";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const SubmitHandlerL = (e) => {
        e.preventDefault();
        // code to send data in api/backend
        console.log("Form Submitted");
        router.push("/login");
    };

    const SubmitHandlerR = (e) => {
        e.preventDefault();
        // code to send data in api/backend
        console.log("Form Submitted");
        router.push(`/register/${e.target.username.value}`);
    };

    return (
        <div>
            <form onSubmit={SubmitHandlerL}>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Submit</button>
            </form>

            <form onSubmit={SubmitHandlerR}>
                <input name="username" type="text" placeholder="Username" />
                <input name="password" type="text" placeholder="Password" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default page;
