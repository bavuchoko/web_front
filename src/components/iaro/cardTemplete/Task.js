import React from 'react';
import {Draggable} from "react-beautiful-dnd";

function Task({task, index}) {
    
    console.log(task)
    
    return (
        <div>
            <Draggable draggableId={task.id} index={index}>
                {(provided) => (
                    <div
                        className="bg-white rounded-md mb-3 px-3"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        
                        <span
                            className="rounded-2xl bg-indigo-700 w-auto inline-block px-3 text-[12px] text-white my-2"
                        >
                            {task.title}
                        </span>

                        <div>
                            {task.content}
                        </div>
                        <div>
                            {task.time}
                        </div>
                        <sapn>{task.writer}</sapn>
                        <sapn>{task.charge}</sapn>
                    </div>
                )}
            </Draggable>
        </div>
    );
}
export default Task;
