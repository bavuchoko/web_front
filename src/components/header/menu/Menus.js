import React from 'react';
import Category from "./Category";

const Catergories = React.memo(({menu,handleClick}) => {
    return (
        <div>
            <div className="flex">
                {menu.map((data)=>(
                    <Category
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

export default Catergories;