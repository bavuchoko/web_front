import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainBody from "./components/main/MainBody";
import Join from "./components/user/Join";
import Login from "./components/user/Login";
import Info from "./components/user/Info";
import UserHome from "./components/user/User_Home";
import IaroLayout from "./components/iaro/IaroLayout";
import {QueryClient, QueryClientProvider} from "react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<MainBody/>}/>
                <Route path="user" element={<UserHome/>}>
                    <Route path=":userId" element={<Info/>}/>
                </Route>
                <Route path="iaro/*" element={<IaroLayout/>}>
                </Route>
            </Route>
            <Route path="join" element={<Join/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
    </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
