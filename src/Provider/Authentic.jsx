import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import auth from "../firebase.config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
function Athentic({children}) {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    //create user with email and password
    const createUserWithPass =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithPass =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign-in
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,provider)
    }

    const userSignOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSub=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        })
        return ()=>{
            unSub();
        }
    },[])
    const info= {
        loading,
        user,
        createUserWithPass,
        signInWithPass,
        userSignOut,
        signInWithGoogle,

    }
    return ( 
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
     );
}
Athentic.propTypes = {
    children: PropTypes.node
}

export default Athentic;