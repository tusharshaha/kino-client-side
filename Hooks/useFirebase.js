import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true)

    // register new user
    const createUser = (name, email, password, Swal) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Registered.',
                    showConfirmButton: false,
                    timer: 1500
                })
                const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(newUser);
                    setAuthError('')
                }).catch(err => {
                    setAuthError(err.message);
                })
            }).catch(err => {
                if (err.message.includes('email-already-in-use')) {
                    setAuthError('The email already registered! Please login..')
                } else {
                    setAuthError(err.message)
                }
            }).finally(() => setLoading(false));
    }
    // login old user
    const login = (email, password, Swal) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Login.',
                    showConfirmButton: false,
                    timer: 1500
                })
                setAuthError('');
            }).catch(err => {
                if (err.message.includes("user-not-found")) {
                    setAuthError("invalid email and Password");
                } else if (err.message.includes("wrong-password")) {
                    setAuthError('Your password is incorrect')
                }
                else {
                    setAuthError(error.message)
                }
            }).finally(() => setLoading(false));
    }
    // reset user password
    const resetPassword = (email, Swal) => {
        setLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email Sent. Please Check Your Email.',
                })
            }).catch(err => {
                if (err.message.includes("auth/configuration-not-found")) {
                    setAuthError('Email not found! Please Register')
                } else {
                    setAuthError(err.message)
                }
            }).finally(() => setLoading(false));
    }
    // logout user
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch(err => {
                setAuthError(err.message)
            }).finally(() => setLoading(false))
    }
    // observed user
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setLoading(false)
        })
    }, [auth])
    return {
        login,
        createUser,
        logOut,
        resetPassword,
        loading,
        user,
        authError
    }
};

export default useFirebase;