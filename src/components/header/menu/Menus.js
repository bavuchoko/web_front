import React from 'react';
import Menu from "./Menu";
import {useQuery} from "react-query";
import {noAuhApi} from "../../../apis/instance/Instance";

const getMenuList = async  () =>{
    const { data } = await noAuhApi({
        url:`/menus`,
        method: 'get',
    })
    return data;
}

const Menus = React.memo(() => {


    const query =useQuery('menus', getMenuList);

    return (
        <div>
            <div className="md:flex">
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