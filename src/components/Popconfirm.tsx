import { useState, useEffect } from "react";

export default props => {
    const { children, content } = props;
    const [show, setShow] = useState(false);
    const switchShow = () => {
        console.log("fsd");
        setShow(e => !e);
    };
    // useEffect(() => {}, [show])
    return (
        <div className="relative">
            <div
                className={`pb-8 p-2 bottom-0 absolute  ${
                    !show ? "hidden" : ""
                }`}
                onMouseOut={switchShow}
            >
                <div className="bg-white shadow-xl p-4">{content}</div>
            </div>
            <div onClick={switchShow}>{children}</div>
        </div>
    );
};
