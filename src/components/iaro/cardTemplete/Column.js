import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import Task from "./Task";



function Column({column, tasks} ) {
    return (
        <div className="px-2 mx-8 w-[340px] bg-gray-200">
            <div >{column.title}</div>
            <Droppable droppableId={column.id}>
                
                {(provided) => (
                    <div
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
        </div>
    );
}

export default Column;