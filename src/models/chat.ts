// 消息数据流

import React, { useCallback } from "react";

type singleMsg = {
    msg: string;
    id: string;
    type: string;
    read: number;
};

export interface MsgList {
    userId: string;
    msg: Array<singleMsg>;
    image: string;
    name: string;
}
export interface PoepleSingle {
    name: string;
    userId: string;
    sex: string;
    image: string;
}

export interface ChatModelState {
    people: Array<MsgList>;
    selectId: string;
    page: string;
    selectPeopleId: string;
    selectImg: string;
    sendState: boolean;
    peopleList: Array<PoepleSingle>;
}
export interface ChatModelType {
    namespace: "chat";
    state: ChatModelState;
}
const ChatModel: ChatModelType = {
    namespace: "chat",
    state: {
        people: [
            {
                name: "大卫",
                userId: "fsdqjqwekhqk",
                msg: [
                    {
                        msg: "您好",
                        id: "my",
                        type: "string",
                        read: 1,
                    },
                    {
                        msg: "鸡你太美",
                        id: "fsdqjqwekhqk",
                        type: "string",
                        read: 1,
                    },
                    {
                        msg: "???",
                        id: "my",
                        type: "string",
                        read: 1,
                    },
                    {
                        msg: "不懂吗",
                        id: "fsdqjqwekhqk",
                        type: "string",
                        read: 0,
                    },
                ],
                image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F4d%2F63%2Fbd%2F4d63bd0b3bf8cc9aa0dc3e1111646b1c.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658942654&t=dcd388bee7e18f3b50e6b48bea66c175",
            },
            {
                name: "大杀四方",
                userId: "fsdergqjkhqk",
                msg: [
                    {
                        msg: "出来吃饭",
                        id: "my",
                        type: "string",
                        read: 1,
                    },
                    {
                        msg: "就这样",
                        id: "obj",
                        type: "string",
                        read: 1,
                    },
                    {
                        msg: "老地方",
                        id: "my",
                        type: "string",
                        read: 1,
                    },
                ],
                image: "https://img1.baidu.com/it/u=1007132089,966890415&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
        ],
        selectId: "",
        selectImg: "",
        sendState: false,
        peopleList: [
            {
                name: "大卫",
                userId: "fsdqjqwekhqk",
                sex: "男",
                image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F4d%2F63%2Fbd%2F4d63bd0b3bf8cc9aa0dc3e1111646b1c.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658942654&t=dcd388bee7e18f3b50e6b48bea66c175",
            },
            {
                name: "王老板",
                userId: "123dfg",
                sex: "男",
                image: "https://img2.baidu.com/it/u=2860188096,638334621&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
            {
                name: "可口可乐",
                userId: "65123f",
                sex: "男",
                image: "https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
            {
                name: "大杀四方",
                userId: "fsdergqjkhqk",
                sex: "男",
                image: "https://img1.baidu.com/it/u=1007132089,966890415&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
            {
                name: "孤勇者",
                userId: "fsdqjkdfghqk",
                sex: "男",
                image: "https://img0.baidu.com/it/u=1533706996,3150334193&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
            {
                name: "爱你孤身",
                userId: "fsdqfsdjkhqk",
                sex: "男",
                image: "https://img0.baidu.com/it/u=3151595625,804030088&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            },
        ],
        selectPeopleId: "",
        page: "msg",
    },
    effects: {},
    reducers: {
        setSelectId(state: ChatModelState, { payload }) {
            let img = "";
            state.people.map(b => {
                if (b.userId == payload) {
                    img = b.image;
                }
                return b;
            });
            state.people.forEach(e => {
                if (e.userId == payload) {
                    e.msg.forEach(b => {
                        b.read = 1;
                    });
                }
            });
            return {
                ...state,
                selectId: payload,
                selectImg: img,
            };
        },
        setSelectPeopleId(state: ChatModelState, { payload }) {
            return {
                ...state,
                selectPeopleId: payload,
            };
        },
        sendMsg(state: ChatModelState, { payload }) {
            const p = state.people.map(b => {
                if (b.userId == state.selectId) {
                    b.msg.push({
                        type: "string",
                        id: "my",
                        msg: payload,
                        read: 1,
                    });
                }
                return b;
            });
            return {
                ...state,
                people: p,
            };
        },
        addMsg(state: ChatModelState, { payload }) {
            let next: boolean = state.people.some(
                e => e.userId == state.selectPeopleId,
            );
            if (!next) {
                let user = state.peopleList.find(
                    e => e.userId == state.selectPeopleId,
                );
                state.people.unshift({ ...user, msg: [] });
            }
            return {
                ...state,
            };
        },
        setPage(state: ChatModelState, { payload }) {
            return {
                ...state,
                page: payload,
            };
        },
    },
};

export default ChatModel;
