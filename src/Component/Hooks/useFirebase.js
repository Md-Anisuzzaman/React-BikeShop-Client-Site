import initializeFirebase from '../Firebase/Firebase-init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';




//Initialize firebase app

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [rurl, setRurl] = useState("");


    const auth = getAuth();
    let history = useHistory();


    const registerUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                addUsers(result.user.email)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    const addUsers = (email) => {
        fetch('https://morning-taiga-95639.herokuapp.com/addusers', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

    }

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    //user sate observation

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(rurl, history, "Logged in");
                //history.push(rurl);
            } else {
                setUser({});
            }

        });

    }, [auth])

    // useEffect(() => {
    //    console.log(rurl);
    // }, [rurl,setRurl])

    return {
        user,
        registerUser,
        loginUser,
        rurl,
        setRurl,
        logOut
    }
};

export default useFirebase;