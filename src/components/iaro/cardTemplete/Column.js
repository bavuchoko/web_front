import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";


const Column = React.memo(({column, tasks, values, setValue, handleSubmit}) => {
    return (
        <div className="px-2 mx-6 w-[300px] bg-gray-200 rounded-sm  shadow-2xl mt-[100px]">
            <button
                className="py-2 pl-1 inline-block text-[14px]"
            >{column.title}
            </button>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div
                        className="columnDiv"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <>
                            {tasks.map((task, idx) => (
                                <Task key={task[0].id} task={task[0]} index={idx}/>
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