import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
        
    };

    const logout = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(user) => {
            if(user){
                setUser(user)
            } else {
                setUser({})
            }
        })
        return unSubscribe;
    },[auth])

    return {googleSignIn, user,logout}
}

export default useFirebase;