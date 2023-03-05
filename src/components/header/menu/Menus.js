import React from 'react';
import Menu from "./Menu";

const Menus = React.memo(({menu,handleClick}) => {
    return (
        <div>
            <div className="md:flex hidden">
                {menu.map((data)=>(
                    <Menu
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        link={data.link}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        </div>
    );
})

export default Menus;