import React from 'react';
import Img from '../assets/img/img.png'
import Attach from '../assets/img/attach.png'

export default function Input() {
    return (
        <>
            <div className="input">
                <input type="text" placeholder='Start typing.....' />
                <div className="send">
                    <img src={Attach} alt="" />
                    <input type="file" style={{display: "none"}} name="file2" id="file2" />
                    <label htmlFor="file2">
                        <img src={Img} alt="" />
                    </label>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}
