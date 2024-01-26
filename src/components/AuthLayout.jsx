// mechanism to protect pages and routes 

import React, {useState, useEffect} from "react";
import { UseSelector, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // if (authStatus === true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        // let authValue = authStatus === true? true : false

        // Check if the authentication status has changed and navigate accordingly
        if(authentication && authStatus !== authentication) {
            navigate('/login')  
        } else if(!authentication && authStatus !== authentication) {
            navigate('/')
        }

        setLoader(false)    // set loading process to false, indicating that any loading process is complete.
    }, [authStatus, navigate, authentication])

    return loader? <h1>Loading...</h1> : <>{children}</>
}
