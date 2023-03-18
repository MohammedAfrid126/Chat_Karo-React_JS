import React from 'react'
import Chat from '../Components/Chat'
import SideBar from '../Components/SideBar'

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="container">
                    <SideBar/>
                    <Chat/>
                </div>
            </div>
        </>
    )
}
