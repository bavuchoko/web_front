import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import CardTemplete from "./cardTemplete/CardTemplete";

function IaroLayout(props) {
    const [value, setValue] = useState("");
    const handleSubmit =(e)=> {
        e.preventDefault();

        let newTodo ={
            id: Date.now(),
            title: value,
            completed:false,
        };
        // setTodoData(prev => [...prev, newTodo]);
        setValue("");
    }

    return (
        <div>
            <Routes>
                <Route path="/card" element={<CardTemplete/>} />
                {/*<Route path="/card" element={<CardTemplete value={value} setValue={setValue} handleSubmit={handleSubmit}  />} />*/}
            </Routes>
        </div>
    );
}

export default IaroLayout;