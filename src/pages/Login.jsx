import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import '../style.scss'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    // const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            // setErrorMessage(error)
            setError(true)
        }
    }

    return (
        <>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="logo">Chat Karo</span>
                    <span className="title">Login</span>
                    {error && <span className="title">{errorMessage}</span>}
                    <form>
                        <input type="email" name="email" id="email" placeholder='Please enter you Email ID' onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" name="password" id="password" placeholder='Please enter you Password' onChange={(e)=>setPassword(e.target.value)}/>
                        <button onClick={handleSubmit}>Login</button>
                        <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
