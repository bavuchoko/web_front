import React, {useState} from 'react';
import Menu from "./Menu";
import axios from "axios";
import {useQuery} from "react-query";

const getMenuList = async  () =>{
    const { data } = await axios.get("http://localhost:8080/menus");
    return data;
}

const Menus = React.memo(() => {

    const query =useQuery('menus', getMenuList);
    console.log(query.data)
    return (
        <div>
            <div className="md:flex hidden">
                {!query.isLoading && (
                    query.data.map((menu)=>(

                    <Menu
                        key={menu.id}
                        id={menu.id}
                        name={menu.name}
                        uri={menu.uri}
                    />
                )))}
            </div>
        </div>
    );
})

export default Menus;