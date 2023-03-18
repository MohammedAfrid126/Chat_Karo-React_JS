import React, { useState } from 'react';
import '../style.scss'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Avatar from '../assets/img/add.png'
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [file, setFile] = useState()
    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const db = getFirestore();




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await createUserWithEmailAndPassword(auth, email, password);


            const date = new Date().getTime();
            const storage = getStorage();
            const storageRef = ref(storage, `${displayName}+${date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(resp.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", resp.user.uid), {
                            uid: resp.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", resp.user.uid), {});
                        navigate("/");
                    } catch (err) {
                        console.log(err);
                        setError(true);
                    }
                });
            });

        } catch (error) {
            setError(true)
        }
    }


    return (
        <>
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="logo">Chat Karo</span>
                    <span className="title">Register</span>
                    {error && <span className="title">Something went Wrong</span>}
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" id="name" placeholder='Please enter you Name' onChange={(e) => setDisplayName(e.target.value)} />
                        <input type="email" name="email" id="email" placeholder='Please enter you Email ID' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="password" id="password" placeholder='Please enter you Password' onChange={(e) => setPassword(e.target.value)} />
                        <input style={{ display: "none" }} type="file" name="avatar" id="avatar" onChange={(e) => setFile(e.target.files[0])} />
                        <label htmlFor="avatar">
                            <img src={Avatar} alt="" />
                            Add an avatar</label>
                        <button type="submit">Sign UP</button>
                        <p>You already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
