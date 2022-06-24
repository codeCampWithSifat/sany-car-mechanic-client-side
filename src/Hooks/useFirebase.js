import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Pages/Login/Firebase/firebase.init";
firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading , setIsLoading] = useState(true);

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider)
        .finally(() => setIsLoading(false))
    };

    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(user) => {
            if(user){
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
        return unSubscribe;
    },[auth])

    return {googleSignIn, user,logout, isLoading}
}

export default useFirebase;