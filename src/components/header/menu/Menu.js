import React from 'react';
import {Link} from "react-router-dom";

const Menu = React.memo( ({id, name, uri}) => {
    return (
        <div>
                <Link to={uri}>
                <div
                    key={id}
                    className=""
                >
                    <div className="mt-12 xl:mr-10 h-12 px-10 text-gray-600 text-center hover:border-b-4 hover:text-gray-400 text-[13px] border-blue-500" >
                        <button className=" align-middle">{name} </button>
                    </div>
                </div>
            </Link>
        </div>
    );
})

export default Menu;