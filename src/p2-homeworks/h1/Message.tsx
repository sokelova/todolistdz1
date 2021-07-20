import React from 'react';
import message_style from "./Message.module.css";

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props:messageType) {
    return (
        <div className={message_style.container}>
            <div className={message_style.ava}>
                <img className={message_style.avaStyle} src={props.avatar}/>
            </div>
            <div className={message_style.message}>
                <div className={message_style.divname}>
                    <p>{props.name}</p>
                </div>
                <div className={message_style.divmes}>
                    {props.message}
                </div>
                <div className={message_style.divtime}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
