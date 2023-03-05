import React, {useCallback, useState} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import Column from "./Column";

function CardTemplete(props) {



        const tasks_d = [
                {
                    key: "1",
                    id: "1",
                    title: "제목",
                    content: "내용1",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "2",
                    id: "2",
                    title: "제목",
                    content: "내용2",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "3",
                    id: "3",
                    title: "제목",
                    content: "내용3",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "4",
                    id: "4",
                    title: "제목",
                    content: "내용4",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "5",
                    id: "5",
                    title: "제목",
                    content: "내용5",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "6",
                    id: "6",
                    title: "제목",
                    content: "내용6",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "7",
                    id: "7",
                    title: "제목",
                    content: "내용7",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                }
        ];
        const columns_d =[
                {
                    id: "1",
                    title: "칼럼1",
                    taskIds:["1","2","3","4"]
                },
                {
                    id: "2",
                    title: "칼럼2",
                    taskIds:["5","6","7"]
                },
        ];
        const columnOrders_d =  ["1","2"];


    const [task, setTasks] = useState(tasks_d);
    const [column, setColumns] = useState(columns_d);
    const [columnOrder, setColumnOrders] = useState(columnOrders_d);

    const onDragEnd =useCallback((result) => {

    },[])



    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex">
                {columnOrder.map((columnId) => {
                    const column_f = column.filter((column) => column.id === columnId);
                    const columns = column_f[0];
                    const taskId_f = columns.taskIds;
                    const tasks = taskId_f.map((taskId) => task.filter((e)=> e.id ===taskId ));
                    console.log(tasks)
                    return (
                        <Column column={columns} tasks={tasks} key={columns.id} />
                    );
                })}
                </div>
            </DragDropContext>
        </div>
    );
}

export default CardTemplete;