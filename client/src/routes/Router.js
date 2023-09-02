import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";

const Registration = lazy(() => import("../components/pages/registration/Registration"))

function Router(){
    return (
        <Routes>
            <Route path="*" element={<Navigate to="registration"/>}/>
            <Route path="registration" element={<Registration/>}/>
        </Routes>
    )
}

export default Router