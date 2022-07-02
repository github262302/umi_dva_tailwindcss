import { useState } from 'react'

export default (props) => {
    const { children, content } = props
    const [show, setShow] = useState(false)
    return (
        <div className="relative">
            <div
                className={`p-4  bottom-8 absolute shadow-xl ${
                    show ? 'hidden' : ''
                }`}
            >
                {content}
            </div>
            <div onClick={() => setShow((e) => !e)}>{children}</div>
        </div>
    )
}
