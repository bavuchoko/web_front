import React, {useCallback, useState} from 'react';
import bell from '../../assets/icons/bell.png'
import pepe from '../../assets/portfolio/pepe.jpg'
import notification from '../../assets/icons/notification.png'
import setting from '../../assets/icons/setting.png'
import github from '../../assets/icons/github.png'
import Menus from "./menu/Menus";
import Search from "../search/Search";
import {Link} from "react-router-dom";

function Header(props) {
    const [value, setValue] = useState("");
    const handleSubmit =(e)=> {
        e.preventDefault();

        let newTodo ={
            id: Date.now(),
            title: value,
            completed:false,
        };
        setValue("");
    }
    const menu=[
        {
            id:"1",
            name:"Java",
            link:"java"
        },
        {
            id:"2",
            name:"Spring",
            link:"spring"
        },
        {
            id:"3",
            name:"Database",
            link:"database"
        },
        {
            id:"4",
            name:"I A R O",
            link:"iaro/card"
        },
    ]
    // const [menu, setMenu] = useState([dummy]);

    const handleClick = useCallback((id)=> {
    },[menu]);



    return (
        <div>
            <div className="flex 2xl:px-40 w-full h-24 items-center border-b border-1 border-r-neutral-400">
                <div className="flex md:w-2/12 sm:w-1/3 h-24 ">
                    <div className="w-1/5">
                        <div className="mt-5 ml-1 w-16 h-16 rounded-full drop-shadow-xl">
                            {/*프로필사진*/}
                            <Link to="/">
                                <img src={pepe} className="userPortrait w-16 h-16 rounded-full" alt="setting icon"/>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 pl-4  w-10/12 h-16 text-sm text-gray-900  text-[12px]">
                        {/*접속자 정보*/}
                        <button className="hidden xl:block xl:px-3">닉네임일이삼사오륙칠팔구</button>
                        {/*알림*/}
                        <div className="flex xl:mt-3 xl:ml-3 lg:mt-4 lg:ml-9 md:mt-5 md:ml-9 sm:mt-4 sm:ml-12">
                            <div className="mr-3 w-4 h-4">
                            <img src={setting} className="settingIcon" alt="setting icon"/>
                            </div>
                            <div className="w-4 h-4">
                                <img src={notification} className="alarmIcon" alt="alarm icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                {/*메뉴목록*/}
                <div className="w-8/12 2xl:w-6/12  h-24 hidden md:block">
                    <Menus menu={menu} handleClick={handleClick}/>
                </div>

                {/*중간 여백*/}
                <div className="2xl:w-2/12 h-24"></div>

                <div className="flex md:w-2/12 sm:w-2/3 h-24 justify-between px-2">
                    <div className="mt-10">
                        <Search handleSubmit={handleSubmit} value={value} setValue={setValue}/>
                    </div>
                    <button className="mt-10 w-8 h-8">
                        <img src={github} className="" alt="alarm icon"  onClick={() => window.open('https://github.com/bavuchoko', '_blank')}/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
