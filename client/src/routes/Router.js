import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";
import { getFromLocalStorage } from "../globalfunctions/local_storarge_functions";

const Registration = lazy(() => import("../components/pages/registration/Registration"))
const Messenger = lazy(() => import("../components/pages/messenger/Messenger"))

function Router(){
    const navigation_address = getFromLocalStorage("username") ? "messenger" : "registration" 
    return (
        <Routes>
            <Route path="*" element={<Navigate to={navigation_address}/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="messenger" element={<Messenger/>}/>
        </Routes>
    )
}

export default Router