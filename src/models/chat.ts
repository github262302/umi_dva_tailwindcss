// 消息数据流

import React, { useCallback } from "react"

type singleMsg = {
    msg: string
    id: string
    type: string
}

export interface MsgList {
    userId: string
    msg: Array<singleMsg>
    image: string
}
export interface ChatModelState {
    people: Array<MsgList>
    selectId: string
    selectImg: string
}
export interface ChatModelType {
    namespace: 'chat';
    state: ChatModelState;
}
const ChatModel: ChatModelType = {
    namespace: "chat",
    state: {
        people: [
            {
                userId: "fsd",
                msg: [{
                    msg: "您好",
                    id: "my",
                    type: "string"
                }, {
                    msg: "鸡你太美",
                    id: "fsd",
                    type: "string"
                }, {
                    msg: "???",
                    id: "my",
                    type: "string"
                }],
                image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01351f5efafeb9a801215aa0568718.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658814083&t=ec2f45b2061471f20a04f87742838515"
            },
            {
                userId: "obj",
                msg: [{
                    msg: "出来吃饭",
                    id: "my",
                    type: "string"
                }, {
                    msg: "就这样",
                    id: "obj",
                    type: "string"
                }, {
                    msg: "老地方",
                    id: "my",
                    type: "string"
                }],
                image: "https://img1.baidu.com/it/u=976756706,3571002820&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            }
        ],
        selectId: "3",
        selectImg: ''
    },
    effects: {


    },
    reducers: {
        setSelectId(state, { payload }) {
            let img = ""
            state.people.map(b => {
                if (b.userId == payload) {
                    img = b.image
                }
            })
            return {
                ...state, selectId: payload, selectImg: img
            }

        },
        sendMsg(state: ChatModelState, { payload }) {

            const p = state.people.map(b => {
                if (b.userId == state.selectId) {
                    b.msg.push({
                        type: "string", id: "my", msg: payload
                    })
                }
                return b
            })
            return {
                ...state, people: p
            }

        },
    },
}




export default ChatModel