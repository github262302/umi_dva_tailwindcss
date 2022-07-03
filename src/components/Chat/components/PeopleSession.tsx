import Avatar from '@/components/Avatar'
import type { ChatModelState, MsgList } from '@/models/chat'
import { connect } from 'umi'

const People = (props: { chat: ChatModelState }) => {
    console.log(props)
    const { dispatch, chat } = props
    const LastMsg = (id: string): string => {
        let res = chat.people.find((e) => e.userId == id)
        if (res?.msg.length == 0) {
            return ''
        }
        let str = res?.msg[res.msg.length - 1].msg
        return str
    }
    const isRead = (userId: string) => {
        const single = chat.people.find((e) => e.userId == userId)
        return single?.msg.some((e) => e.read == 0)
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
                    className="my-4 mx-4 flex cursor-pointer  z-10"
                    onClick={() => setPs(person.userId)}
                >
                    <div className="w- 4/12">
                        <Avatar
                            red={isRead(person.userId)}
                            src={person.image}
                            className={` h-8 w-8 rounded-full`}
                        />
                    </div>

                    <div className="ml-3 w-8/12">
                        <p className="text-sm font-medium text-gray-900">
                            {person.name}
                        </p>
                        <p className="text-sm  text-gray-500 overflow-hidden truncate">
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
