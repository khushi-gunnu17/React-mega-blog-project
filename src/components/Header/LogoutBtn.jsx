import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        // It is a promise, so we can use then and finally with it.
        authService.logout().then(() => {
            // so that the imp info in the store remains updated.
            dispatch(logout)
        })
    }

    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )
}

export default LogoutBtn