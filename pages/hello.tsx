import type { NextPage } from "next";
import Login from "./login/login";
import Radio from "./radio/radio";

const Hello: NextPage = () => {
    return (
        <div>
            hello
            <hr />
            <hr />
            <Login />
            <hr></hr>
            <hr></hr>
        </div>
    );
};

export default Hello;
