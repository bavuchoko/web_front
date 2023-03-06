import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";
import more from "../../../assets/icons/more.png"


const onee =()=> {
    console.log("onees")
}
const Column = React.memo(({column, tasks, values, setValue, handleSubmit}) => {
    return (
        <div className="px-2 mx-6 w-[300px] columns rounded-md  shadow-2xl mt-[100px]">

            <button
                className="py-2 pl-1 inline-block text-[14px] font-extrabold text-gray-600 "
            >{column.title}
            </button>

            <button className="w-5 h-5 inline-block float-right mt-2 mr-1">
                <img src={more}/>
            </button>

            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div
                        className="columnDiv py-0.5 rounded-md"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <>
                            {tasks.map((task, idx) => (
                                <Task key={task[0].id} task={task[0]} index={idx} />
                                ))}
                            {provided.placeholder}
                        </>

                    </div>
                )}
            </Droppable>
            {/*<div>*/}
            {/*    <Inputs value={values} setVAlue={setValue} handleSubmit={handleSubmit}/>*/}
            {/*</div>*/}
        </div>
    );
})

export default Column;