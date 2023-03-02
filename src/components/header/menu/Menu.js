import React from 'react';

const Menu = React.memo( ({id, name, handleClick}) => {
    return (
        <div>
            <div
                key={id}
                className=""
            >
                <div className="mt-12 mr-10 h-12 px-10 text-gray-600 text-center hover:border-b-4 hover:text-gray-400  border-amber-500 text-[13px]"  onClick={()=>handleClick(id)}>
                    <button className=" align-middle">{name} </button>
                </div>
            </div>

        </div>
    );
})

export default Menu;