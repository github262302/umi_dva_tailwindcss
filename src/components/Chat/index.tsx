import { ChatModelState } from '@/models/chat'
import { useEffect, Component, ReactNode, useState } from 'react'
import styles from './index.scss'
import { connect } from 'umi'
import Message from './components/Message'
import PeopleSession from './components/PeopleSession'
import People from './components/People'
import PeopleInfo from './components/PeopleInfo'

const App = (props: { chat: ChatModelState }) => {
    const { chat, dispatch, user } = props
    return (
        <div className={styles.main}>
            <div
                className={`container h-5/6 flex shadow-lg rounded-md ${styles.broad} `}
            >
                <div className="bg-indigo-400 p-8 ">
                    <ul className=" gap-8 flex flex-col h-full">
                        <li className="text-white cursor-pointer">
                            <img src={user.image} alt="" className="h-8 w-8" />
                        </li>
                        <li
                            className="text-white cursor-pointer"
                            onClick={() =>
                                dispatch({
                                    type: 'chat/setPage',
                                    payload: 'msg',
                                })
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-8 w-8 ${
                                    chat.page == 'msg' && 'text-yellow-400'
                                } `}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                />
                            </svg>
                        </li>
                        <li
                            className="text-white cursor-pointer flex-1"
                            onClick={() =>
                                dispatch({
                                    type: 'chat/setPage',
                                    payload: 'people',
                                })
                            }
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-8 w-8 ${
                                    chat.page == 'people' && 'text-yellow-400'
                                } `}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </li>

                        <li className="text-white cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className="w-1/5">
                    {chat.page == 'msg' ? <PeopleSession /> : <People />}
                </div>
                <div className="flex-1">
                    {chat.page == 'msg' ? <Message /> : <PeopleInfo />}
                </div>
            </div>
        </div>
    )
}
export default connect(({ chat, user }: { chat: ChatModelState }) => ({
    chat,
    user,
}))(App)
