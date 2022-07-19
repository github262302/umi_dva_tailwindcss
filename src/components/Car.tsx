import styles from "./Car.scss";
import { useScroll } from "ahooks";
import { useRef, useEffect, useState } from "react";
const big =
    "https://tesla-cdn.thron.com/delivery/public/image/tesla/c46c5993-c9c2-4938-a18d-7c414a9213ab/bvlatuR/std/4096x2560/M3-Homepage-Desktop-CN";
const masaladi =
    "https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my23/mc20-cielo/16_9/MC20-cielo_design.jpg?$1920x2000$&fit=constrain";
type PropsType = { scrolled: number };
export default (props: PropsType): React.ReactElement => {
    const { scrolled } = props;
    /* 返回百分比 */
    function Pace(start: number) {
        return (scrolled - start) / 0.1;
    }
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
        }
        if (scrolled >= 0.3) {
            let n = 0.9 + 0.1 * ((scrolled - 0.3) / 0.1);
            scale = n > 1 ? 1 : n;
        }
        return { transform: `scale(${scale})` };
    }
    function CarOne(): React.CSSProperties {
        let left = 0;

        if (scrolled >= 0.2) {
            left = 0 - ((scrolled - 0.2) / 0.1) * 100;
        }
        return { left: `${left}vw` };
    }
    function CarTwo(): React.CSSProperties {
        let left = 100;
        if (scrolled >= 0.3) {
            left = 0;
        } else if (scrolled >= 0.2) {
            left = 100 - ((scrolled - 0.2) / 0.1) * 100;
        }
        return { left: `${left}vw` };
    }
    function BackText(): React.CSSProperties {
        let n = 0;
        if (scrolled >= 0.4) {
            let percentage = Pace(0.4);
            n = 0.3 * percentage > 0.3 ? 0.3 : 0.3 * percentage;
            console.log("大于4", n);
        }

        return { backgroundColor: `rgb(0, 0, 0,${n})`, ...CarTwo() };
    }

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.cars} style={ImgStyle()}>
                    <img className={styles.carOne} src={big} style={CarOne()} />
                    <img
                        className={styles.carTwo}
                        src={masaladi}
                        style={CarTwo()}
                    />
                    <div className={styles.carThree} style={BackText()}></div>
                </div>

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
