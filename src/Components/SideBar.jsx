import React from 'react'
import NavBar from '../Components/Navbar'
import Chats from './Chats'
import Search from './Search'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <NavBar/>
            <Search/>
            <Chats/>
        </div>
    )
}
