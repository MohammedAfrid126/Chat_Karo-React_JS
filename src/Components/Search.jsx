import React from 'react'

export default function Search() {
    return (
        <>
            <div className="search">
                <div className="searchForm">
                    <input
                        type="text"
                        placeholder="Find a user"
                        // onKeyDown={handleKey}
                        // onChange={(e) => setUsername(e.target.value)}
                        // value={username}
                    />
                </div>
                {/* {err && <span>User not found!</span>}
                {user && (
                    <div className="userChat" onClick={handleSelect}>
                        <img src={user.photoURL} alt="" />
                        <div className="userChatInfo">
                            <span>{user.displayName}</span>
                        </div>
                    </div>
                )} */}
            </div>
        </>
    )
}
