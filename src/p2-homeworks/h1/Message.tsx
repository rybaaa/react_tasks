import React from 'react'
import s from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessageDataType) {
    return (
        <div className={s.block}>
            <img className={s.avatar} src={props.avatar}></img>
            <div className={s.block2}>
                <div className={s.name}> {props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>


    )
}

export default Message
