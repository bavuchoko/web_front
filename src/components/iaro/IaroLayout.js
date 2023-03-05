import React from 'react';
import {Route, Routes} from "react-router-dom";
import CardTemplete from "./cardTemplete/CardTemplete";

function IaroLayout(props) {
    return (
        <div>
            <Routes>
                <Route path="/card" element={<CardTemplete/>} />
            </Routes>
        </div>
    );
}

export default IaroLayout;