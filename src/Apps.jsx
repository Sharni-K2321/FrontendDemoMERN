import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CraeteUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import User from "./User.jsx";

const Apps = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path = "/" element={<User />} />
                <Route path = "/create" element={<CraeteUser />} />
                <Route path = "/update/:id" element={<UpdateUser />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Apps