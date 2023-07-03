import Home from "@/components/Home";

const page = () => {
    const style = {
        fontSize: "18px",
        color: "royalblue",
        fontFamily: "montserrat",
    };

    return (
        <div style={{ height: "100%" }}>
            <h1 style={{ fontSize: "50px", color: "blue" }}>
                Lorem ipsum dolor sit amet.
            </h1>

            <p style={style}>Lorem ipsum dolor sit amet.</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <h3 className="sameer">Lorem ipsum dolor sit amet.</h3>
            <Home />
        </div>
    );
};

export default page;
