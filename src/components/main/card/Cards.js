import React from 'react';
import Card from "./Card";

function Cards({data}) {
    return (
        <div className="w-full h-full m-auto mt-[50px] grid  grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">

            {data.map((data)=>(
            <Card
                key={data.id}
                data={data}
            />
            ))}
        </div>

    );
}

export default Cards;
