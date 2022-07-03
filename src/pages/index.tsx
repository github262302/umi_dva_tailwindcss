import React, { useRef } from 'react'
import yayJpg from '../assets/yay.jpg'
import Car from '@/components/Car'
import scssStyles from './index.scss'
import Chat from '@/components/Chat'
import { useScroll } from 'ahooks'
export default function HomePage() {
    const ref = useRef(null)
    const scroll = useScroll(ref)
    const main = document.getElementById('main')
    console.log(main?.clientHeight)

    return (
        <div className={scssStyles.main} id="main" ref={ref}>
            <div className={scssStyles.section}>
                <Car />
            </div>
            <div className={scssStyles.section}>
                <Chat />
            </div>
            <div className={scssStyles.section}>2</div>
        </div>
    )
}
