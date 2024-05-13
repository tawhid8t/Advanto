import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    
    const [loader, setLoader] = useState(true)
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    console.log(user);
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const exitingUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // logout
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {   
            setUser(currentUser);
            console.log(currentUser);
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const AuthInfo = { user, createUser, exitingUser, googleSignIn, loader, logOut }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;