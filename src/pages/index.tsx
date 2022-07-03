import React from 'react'
import yayJpg from '../assets/yay.jpg'
import Car from '@/components/Car'
import scssStyles from './index.scss'
import Chat from '@/components/Chat'
export default function HomePage() {
    return (
        <div className={scssStyles.main} id="main">
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
