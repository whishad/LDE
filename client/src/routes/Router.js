import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";
import { getFromLocalStorage } from "../globalfunctions/local_storarge_functions";

const Registration = lazy(() => import("../components/pages/registration/Registration"))

function Router(){
    const navigation_address = getFromLocalStorage("username") ? "messenger" : "registration" 
    return (
        <Routes>
            <Route path="*" element={<Navigate to={navigation_address}/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="messenger" element={<p>this is the messenger page</p>}/>
        </Routes>
    )
}

export default Router