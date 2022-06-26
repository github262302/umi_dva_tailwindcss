import type { ChatModelState } from '@/models/chat'
import { connect } from 'umi'

const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const People = (props: { chat: ChatModelState }) => {
    console.log(props)
    const { dispatch, chat } = props
    return (
        <ul className="divide-y divide-gray-200 border-solid border-r-2 border-light-blue-500 overflow-hidden w-1/4">
            {chat.people.map((person, index) => (
                <li
                    key={index}
                    className="py-4 px-4 flex cursor-pointer"
                    onClick={() => {
                        console.log('person.userId', person.userId)

                        dispatch({
                            type: 'chat/setSelectId',
                            payload: person.userId,
                        })
                    }}
                >
                    <img
                        className=" h-10 w-10 rounded-full"
                        src={person.image}
                        alt=""
                    />
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            {person.userId}
                        </p>
                        <p className="text-sm text-gray-500">{person.userId}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default connect(({ chat }: { chat: ChatModelState }) => ({
    chat,
}))(People)
