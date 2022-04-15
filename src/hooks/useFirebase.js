import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, getIdToken } from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/Firebase.init';

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {


        return signInWithPopup(auth, googleProvider)

    }
    const registerUser = (email, password, name, history) => {

        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                // saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history('/home');

            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }
    const loginUser = (email, password, location, history) => {

        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history(destination);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken)

                //     })
            } else {

                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    // useEffect(() => {
    //     fetch(`https://immense-cove-30280.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            // setUser({})
        }).catch((error) => {
            // An error happened.
        })

            .finally(() => setIsLoading(false));
    }

    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('https://immense-cove-30280.herokuapp.com/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()

    // }


    return {
        user,
        admin,
        // token,
        isLoading,
        registerUser,
        signInUsingGoogle,
        logOut,
        loginUser,
        authError,
    }
};

export default useFirebase;