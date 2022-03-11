import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, sendEmailVerification } from "firebase/auth";
import initializeFirebase from '../Firebase/firebase.init';
import Swal from 'sweetalert2';

initializeFirebase()

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [regError, setRegError] = useState('');
    const [loading, setLoading] = useState(true);

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
                // const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(auth.currentUser);
                    setRegError('')
                }).catch(err => {
                    setRegError(err.message);
                })
            }).catch(err => {
                if (err.message.includes('email-already-in-use')) {
                    setRegError('The email already registered! Please login..')
                } else if (err.message.includes('auth/weak-password')) {
                    setRegError('Set a strong password!')
                } else {
                    setRegError(err.message)
                }
            }).finally(() => setLoading(false));
    }
    // verify user email
    const verifyUserEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                Swal.fire({
                    icon: "info",
                    title: "Verification Email Sent!",
                    text: "A verfication email was sent to your email. Please check your email and verify your email address."
                })
            })
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
                if (err.message.includes("user-not-found") || err.message.includes("auth/invalid-email")) {
                    setAuthError("invalid email and Password");
                } else if (err.message.includes("wrong-password")) {
                    setAuthError('Your password is incorrect')
                }
                else {
                    setAuthError(err.message)
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
                } else if (err.message.includes("auth/invalid-email")) {
                    setAuthError('Write a valid email!')
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
        verifyUserEmail,
        regError,
        loading,
        user,
        authError
    }
};

export default useFirebase;