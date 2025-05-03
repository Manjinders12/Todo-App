import React, { use, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const checkUserStatus = async (email) => {
        try {
            const response = await fetch(` http://localhost:5001/users?email=${email}`)
            const user = await response.json();
            if (user.length > 0) {

                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                navigate

            }
        } catch (error) {

        }
    }

    alert("hello ")


    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        if (local) {
            checkUserStatus(local.email);
        } else {
            navigate("/login")
        }
    }, [])



    return (
        isloggedIn ? children : null
    )
}

export default ProtectedRoute