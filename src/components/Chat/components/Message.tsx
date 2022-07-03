import type { ChatModelState } from '@/models/chat'
import { connect } from 'umi'
import React, { useEffect, useRef, useState } from 'react'
import { useScroll } from 'ahooks'
import Empty from './Empty'
import Popconfirm from '@/components/Popconfirm'
import styles from './Message.scss'

const Message = (props: { chat: ChatModelState }) => {
    const [put, setPut] = useState(false)
    const [emoji, setEmoji] = useState(false)
    const ref = useRef(null)
    const { chat, dispatch, user } = props
    const messageEle = document.getElementById('message')
    const SendMessage = () => {
        setPut(true)
        setTimeout(() => {
            const s = document.getElementById('send')
            if (s.value == '') {
                setPut(false)
                return
            }

            dispatch({
                type: 'chat/sendMsg',
                payload: s?.value,
            })
            s.value = ''
            SeeBottom()
            setPut(false)
        }, 1000)
    }
    const SeeBottom = () => {
        setTimeout(() => {
            try {
                messageEle.scrollTop = messageEle.scrollHeight
            } catch {}
        }, 100)
    }
    const msgList = chat.people.filter((e) => e.userId == chat.selectId)
    const userinfo = chat.people.find((e) => e.userId == chat.selectId)
    const Upload = () => {
        document.getElementById('upload')?.click()
    }
    useEffect(() => {
        console.log('zhixingEffect')

        SeeBottom()
        return () => {}
    }, [chat.selectId])
    if (chat.selectId == '') {
        return <Empty />
    }
    return (
        <div className="flex h-full flex-col">
            {/* 目标信息 */}
            <div className="border-solid border-b-2 border-light-blue-500 p-4 flex gap-8">
                <img
                    src={chat.selectImg}
                    alt=""
                    className="h-8 w-8 rounded-full"
                />
                {userinfo?.name}
            </div>
            {/* 消息显示 */}
            <div
                id="message"
                className={`bg-gray-50 flex-1 p-4 flex-col flex gap-8 overflow-y-scroll max-h-96 transition-all ${styles.msg}`}
                ref={ref}
            >
                {msgList[0] &&
                    msgList[0].msg.map((e) => (
                        <div className="flex-none">
                            <div
                                className={`flex  gap-4 ${
                                    e.id != chat.selectId
                                        ? 'justify-start flex-row-reverse'
                                        : ' '
                                }`}
                            >
                                <div>
                                    <img
                                        className="h-12"
                                        src={
                                            e.id != chat.selectId
                                                ? user.image
                                                : chat.selectImg
                                        }
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={` break-words  max-w-xs align-baseline rounded shadow-xl p-3  ${
                                        e.id != chat.selectId
                                            ? 'bg-yellow-300'
                                            : ' '
                                    }`}
                                >
                                    {e.msg}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* 输入框 */}
            <div className="h-1/5 flex flex-col">
                <div>
                    {/* 工具栏 */}
                    <ul className="divide-y flex gap-4 p-2">
                        <li className="cursor-pointer relative">
                            <Popconfirm content={<>开发中</>}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Popconfirm>
                        </li>
                        <li className="cursor-pointer">
                            <input type="file" id="upload" className="hidden" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                onClick={Upload}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </li>
                        <li className="cursor-pointer">
                            <Popconfirm content={<>开发中</>}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                </svg>
                            </Popconfirm>
                        </li>
                    </ul>
                </div>
                <div className="relative flex-1">
                    <textarea
                        placeholder="请输入信息"
                        id="send"
                        className="  h-full w-full p-2  "
                        style={{ resize: 'none', outline: 'none' }}
                    />
                    <div
                        onClick={SendMessage}
                        className="rounded-md flex absolute absolute bottom-4 right-12 bg-yellow-300 text-white px-4 py-1 cursor-pointer text-black"
                    >
                        {put && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 animate-spin"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    className=""
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
                                />
                            </svg>
                        )}
                        Send
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect(({ chat, user }) => ({
    chat,
    user,
}))(Message)
