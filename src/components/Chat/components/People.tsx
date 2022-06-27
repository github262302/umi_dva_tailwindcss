import type { ChatModelState } from '@/models/chat'
import { connect } from 'umi'

const App = (props: { chat: ChatModelState }) => {
    const { chat, dispatch } = props
    console.log(props, 'propspeopleList')

    return (
        <div className="flex  h-full flex-col gap-4 p-4 border-gray-200 border-r-2 border-solid">
            {chat.peopleList.map((e) => (
                <div
                    className="flex gap-4 cursor-pointer"
                    onClick={() => {
                        dispatch({
                            type: 'chat/setSelectPeopleId',
                            payload: e.userId,
                        })
                    }}
                >
                    <img src={e.image} alt={''} className={`h-8 w-8`} />
                    <div className="flex items-center">
                        <div>{e.name}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default connect(({ chat }: { chat: ChatModelState }) => ({
    chat,
}))(App)
