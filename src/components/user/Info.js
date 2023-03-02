import React, {useState} from 'react';
import {useParams} from "react-router-dom";
function Info(props) {
    let param = useParams();
    return (
        <div>
            <h1>Info of {param.userId}</h1>
        </div>
    );
}

export default Info;
