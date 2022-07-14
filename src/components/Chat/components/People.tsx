import Avatar from "@/components/Avatar";
import type { ChatModelState } from "@/models/chat";
import { connect } from "umi";

const App = (props: { chat: ChatModelState }) => {
    const { chat, dispatch } = props;
    console.log(props, "propspeopleList");
    return (
        <div className="flex  h-full flex-col gap-4 p-4 border-gray-200 border-r-2 border-solid">
            <Search />
            {chat.peopleList.map(e => (
                <div
                    className="flex gap-4 cursor-pointer"
                    onClick={() => {
                        dispatch({
                            type: "chat/setSelectPeopleId",
                            payload: e.userId,
                        });
                    }}
                >
                    <Avatar src={e.image} className={`h-8 w-8`} />

                    <div className="flex items-center">
                        <div>{e.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default connect(({ chat }: { chat: ChatModelState }) => ({
    chat,
}))(App);

const Search = () => {
    return (
        <div>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            className="focus:ring-yellow-400 focus:border-yellow-400 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                        />
                    </svg>
                </div>
                <input
                    className="w-full pl-8 rounded-xl form-input"
                    type="text"
                    name="price"
                    id="price"
                />
            </div>
        </div>
    );
};
