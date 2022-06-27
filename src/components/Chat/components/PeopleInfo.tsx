import type { ChatModelState, PoepleSingle } from '@/models/chat'
import { connect } from 'umi'
import Empty from './Empty'

const App = (props: { chat: ChatModelState }) => {
    const { chat, dispatch } = props
    if (chat.selectPeopleId == '') {
        return <Empty />
    }
    const userInfo = (): PoepleSingle => {
        let info: any
        chat.peopleList.map((e) => {
            if (e.userId == chat.selectPeopleId) {
                info = e
            }
        })
        return info
    }
    return (
        <div className="grid place-items-center h-full w-full">
            <div className="w-1/2 h-5/6 flex flex-col gap-8">
                <div className="flex gap-4">
                    <div>
                        <img
                            src={userInfo().image}
                            alt=""
                            className="h-12 w-12"
                        />
                    </div>
                    <div>
                        <div>{userInfo().name}</div>
                        <div className="text-xs text-gray-400">
                            id:{userInfo().userId}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div
                        onClick={() => {
                            dispatch({
                                type: 'chat/addMsg',
                            })
                            dispatch({
                                type: 'chat/setSelectId',
                                payload: chat.selectPeopleId,
                            })
                            dispatch({
                                type: 'chat/setPage',
                                payload: 'msg',
                            })
                        }}
                        className="text-white cursor-pointer bg-yellow-400 p-2 w-24 text-center rounded select-none"
                    >
                        发消息
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect(({ chat }: { chat: ChatModelState }) => ({
    chat,
}))(App)
