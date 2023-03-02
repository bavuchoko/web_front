import React from 'react';
import Menu from "./Menu";

const Menus = React.memo(({menu,handleClick}) => {
    return (
        <div>
            <div className="flex">
                {menu.map((data)=>(
                    <Menu
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
})

export default Menus;