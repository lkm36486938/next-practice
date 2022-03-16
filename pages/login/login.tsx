import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import A from "../../component/a";

const reg = /^[A-Za-z]+$/; // 문자만 허용

const Login: NextPage = () => {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginType, setLoginType] = useState<"a" | "b">("a");

    const login = () => {
        if (reg.test(id)) {
            alert(`${id} , ${password}`);
        } else {
            alert("아이디는 문자만 입력");
        }
    };

    const _setId = (e: string) => {
        setId(e);
    };
    const _setPassword = (e: string) => {
        setPassword(e);
    };

    const _setPasswordOnFocus = () => {
        console.log("asdf");
        setPassword("");
    };

    const _setLoginType = (loginType: "a" | "b") => {
        setLoginType(loginType);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <label>ID</label>
            <br></br>
            <input
                type="text"
                onChange={(e) => _setId(e.target.value)}
                value={id}
            />

            <br></br>
            <label>Password</label>
            <br />
            <input
                type="password"
                value={password}
                onChange={(e) => _setPassword(e.target.value)}
                onFocus={() => _setPasswordOnFocus()}
            />

            {loginType === "b" && <div>방법 B로 실행합니다.</div>}

            <br></br>
            <br></br>
            <button onClick={login}>Login!!</button>
            <br></br>

            {/* radio */}
            <input
                type="radio"
                checked={loginType === "a"}
                onChange={(e) => {
                    _setLoginType("a");
                }}
            />
            <label>방법A</label>
            <input
                type="radio"
                checked={loginType === "b"}
                onChange={(e) => {
                    _setLoginType("b");
                }}
            />
            <label>방법B</label>

            <hr />
            <A />
        </div>
    );
};

export default Login;
