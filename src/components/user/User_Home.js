import React from 'react';
import {Outlet} from "react-router-dom";

function User_Home(props) {
    return (
        <div>
            <h1>User_Home </h1>
            <Outlet/>
        </div>
    );
}

export default User_Home;