import React, { useRef, useState } from "react";
import yayJpg from "../assets/yay.jpg";
import Car from "@/components/Car";
import scssStyles from "./index.scss";
import Chat from "@/components/Chat";

function scrolledFn(a, b, c) {
    return a / (b - c);
}
export default function HomePage() {
    const [scrolled, setScrolled] = useState(0);
    return (
        <div
            className={scssStyles.main}
            onScroll={e => {
                const ele = e.currentTarget;
                const scolledNum = scrolledFn(
                    ele.scrollTop,
                    ele.scrollHeight,
                    ele.clientHeight,
                );
                setScrolled(scolledNum);
            }}
            id="main"
        >
            <div className={scssStyles.section}>
                <Car scrolled={scrolled} />
            </div>
            <div className={scssStyles.section}>
                <Chat />
            </div>
            <div className={scssStyles.section}>2</div>
        </div>
    );
}
