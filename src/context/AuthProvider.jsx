import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { auth } from "../Firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user with email/password and optional profileImage
    const createUser = async (email, password, profileImage) => {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);

        // Update displayName or photoURL if profileImage provided
        if (profileImage) {
            await updateProfile(result.user, { photoURL: profileImage });
        }

        setUser({ ...result.user, photoURL: profileImage || result.user.photoURL });
        setLoading(false);
        return result;
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = async () => {
        setLoading(true);
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user); // Google profile info includes photoURL
        setLoading(false);
        return result;
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
