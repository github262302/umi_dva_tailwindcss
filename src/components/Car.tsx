import styles from "./Car.scss";
import { useScroll } from "ahooks";
import { useRef, useEffect, useState } from "react";
const small =
    "https://tesla-cdn.thron.com/delivery/public/image/tesla/8abede90-db78-460f-8e3e-122265934afc/bvlatuR/std/1928x4096/M3-Homepage-Mobile-CN";
const big =
    "https://tesla-cdn.thron.com/delivery/public/image/tesla/c46c5993-c9c2-4938-a18d-7c414a9213ab/bvlatuR/std/4096x2560/M3-Homepage-Desktop-CN";

type PropsType = { scrolled: number };
export default (props: PropsType): React.ReactElement => {
    const { scrolled } = props;
    function TitleStyle(): React.CSSProperties {
        let FS = 40;
        let FH = 150;

        if (scrolled <= 0.1) {
            FS = 40 + scrolled * 800;
        } else {
            FS = 40 + 0.1 * 800;
        }
        if (scrolled > 0.1) {
            FH = 150 - ((scrolled - 0.1) / 0.1) * 650;
        } else {
        }
        console.log(FH);

        return { fontSize: `${FS}px`, top: FH };
    }

    function ImgStyle(): React.CSSProperties {
        let scale = 1;
        if (scrolled > 0.1) {
            let n = 1 - 0.1 * ((scrolled - 0.1) / 0.1);
            scale = n < 0.9 ? 0.9 : n;
        } else {
        }
        return { transform: `scale(${scale})` };
    }
    console.log(scrolled, "scrolled");

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <img className={styles.car} src={big} style={ImgStyle()} />
                <div className="absolute left-1/2 animate-bounce bottom-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div
                    className={`absolute h-screen w-screen grid justify-items-center ${styles.text}`}
                    style={TitleStyle()}
                >
                    Model S
                </div>
            </div>
        </div>
    );
};
