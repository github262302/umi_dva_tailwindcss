import React from "react";
import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
    const data = ["Home", "Chat", "Todo"];
    const LinkTo = (num: number) => {
        console.log("top");
        const main = document.getElementById("main");
        const To = (main.scrollHeight / 3) * num;

        main?.scrollTo(0, To);
    };
    return (
        <div className="">
            <div
                className={
                    "top-0 w-full fixed bg-transparent flex justify-center h-12 items-center z-50"
                }
            >
                <ul className=" flex gap-8">
                    {data.map((e, index) => (
                        <li
                            onClick={() => LinkTo(index)}
                            className="border-solid border-1 border-purple-400 rounded-full h-8 mx-2 text-black-200"
                        >
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
            <Outlet />
        </div>
    );
}
