import React from 'react'
import Cam from '../assets/img/cam.png'
import Add from '../assets/img/add.png'
import More from '../assets/img/more.png'
import Messages from './Messages'
import Input from './Input'

export default function Chat() {
    return (
        <>
            <div className="chat">
                <div className="chatInfo">
                    <span>Jane</span>
                    <div className="chatIcons">
                        <img src={Cam} alt="" />
                        <img src={Add} alt="" />
                        <img src={More} alt="" />
                    </div>
                </div>
                <Messages/>
                <Input/>
            </div>
        </>
    )
}
