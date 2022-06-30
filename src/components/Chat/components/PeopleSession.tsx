import type { ChatModelState } from '@/models/chat'
import { connect } from 'umi'

const People = (props: { chat: ChatModelState }) => {
    console.log(props)
    const { dispatch, chat } = props
    const LastMsg = (id: string): string => {
        return 'ffsdfsdfffff'
    }
    const setPs = (id: string) => {
        dispatch({
            type: 'chat/setSelectId',
            payload: id,
        })
    }
    return (
        <div className=" divide-y h-full divide-gray-200 border-solid border-r-2 border-light-blue-500 overflow-hidden ">
            {chat.people.map((person, index) => (
                <div
                    key={index}
                    className="py-4 px-4 flex cursor-pointer"
                    onClick={() => setPs(person.userId)}
                >
                    <img
                        className=" h-10 w-10 rounded-full"
                        src={person.image}
                        alt=""
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {person.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            {LastMsg(person.userId)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default connect(({ chat }: { chat: ChatModelState }) => ({
    chat,
}))(People)
