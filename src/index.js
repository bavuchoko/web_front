import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainBody from "./components/main/MainBody";
import Join from "./components/user/Join";
import Info from "./components/user/Info";
import UserHome from "./components/user/User_Home";
import IaroLayout from "./components/iaro/IaroLayout";
import CardTemplete from "./components/iaro/cardTemplete/CardTemplete";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<MainBody/>}/>
                <Route path="user" element={<UserHome/>}>
                    <Route path=":userId" element={<Info/>}/>
                    <Route path="new" element={<Join/>}/>
                    <Route path="login" element={<Join/>}/>
                </Route>
                <Route path="iaro/*" element={<IaroLayout/>}>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
