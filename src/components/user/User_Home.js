import React from 'react';
import {Outlet} from "react-router-dom";

function User_Home(props) {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

export default User_Home;