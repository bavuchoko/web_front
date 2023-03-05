import React from 'react';
import Cards from "./card/Cards";
import Pagination from "../utils/Pagination";

function MainBody(props) {
    const data=[
        {
            id:"1",
            title:"테스트1",
            content:"컨텐츠1",
            time:"2022-01-01 09:00:00"
        },
        {
            id:"2",
            title:"테스트2",
            content:"컨텐츠2",
            time:"2022-01-01 09:00:00"
        },
        {
            id:"3",
            title:"테스트3",
            content:"컨텐츠3",
            time:"2022-01-01 09:00:00"
        },
        {
            id:"4",
            title:"테스트4",
            content:"컨텐츠4",
            time:"2022-01-01 09:00:00"
        }
        ]

    return (
        <div>
              <Cards
                  key={data.id}
                  data={data}
              />

            <Pagination />


        </div>
    );
}

export default MainBody;