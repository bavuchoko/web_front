import React, {useCallback, useState} from 'react';
import {DragDropContext} from "react-beautiful-dnd";
import Column from "./Column";

function CardTemplete(props) {



        const tasks_d = [
                {
                    key: "1",
                    id: "1",
                    workSet: ["로그인 서버분할","컨트롤러 분리"],
                    color: ["#3a5eec","#CC0E74"],
                    content: "로그인 사용 객체 변경",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "2",
                    id: "2",
                    workSet: ["로그인 서버분할","서비스 분리"],
                    content: "로그인 분할서버 포트세팅",
                    color: ["#3a5eec","#CC0E74"],
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "3",
                    id: "3",
                    workSet: ["로그인 서버분할"],
                    color: ["#3a5eec"],
                    content: "로그인 페이지 디자인 변경 로그인 페이지 디자인 변경 로그인 페이지 디자인 변경",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "4",
                    id: "4",
                    workSet: ["제목"],
                    color: ["#56e82c"],
                    content: "내용4",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "5",
                    id: "5",
                    workSet: ["제목"],
                    color: ["#67e544"],
                    content: "내용5",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "6",
                    id: "6",
                    workSet: ["제목"],
                    color: ["#67e544"],
                    content: "내용6",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                },
                {
                    key: "7",
                    id: "7",
                    workSet: ["제목"],
                    color: ["#67e544"],
                    content: "내용7",
                    charge: "담당자",
                    writer: "등록자",
                    time: "2023-01-01 00:00"
                }
        ];
        const columns_d =[
                {
                    id: "1",
                    title: "To do",
                    taskIds:["1","2","3","4"]
                },
                {
                    id: "2",
                    title: "Doing",
                    taskIds:["5","6","7"]
                },
                {
                    id: "3",
                    title: "Done",
                    taskIds:[]
                },
                {
                    id: "4",
                    title: "Done",
                    taskIds:[]
                },                {
                    id: "5",
                    title: "Done",
                    taskIds:[]
                }


        ];
        const columnOrders_d =  ["1","2","3","4"];


    const [task, setTasks] = useState(tasks_d);
    const [column, setColumns] = useState(columns_d);
    const [columnOrder, setColumnOrders] = useState(columnOrders_d);

    const onDragEnd = useCallback((result) => {
        const { destination, source, draggableId } = result;
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            source.index === destination.index
        )
            return;

        const fromColumnId = column.filter((e) => e.id === source.droppableId);
        const toColumId = column.filter((e) => e.id === destination.droppableId);
        const newTaskIds = Array.from(fromColumnId[0].taskIds);
        const toTaskIds = Array.from(toColumId[0].taskIds);

        newTaskIds.splice(source.index, 1);

        if(source.droppableId != destination.droppableId){
            toTaskIds.splice(destination.index, 0, draggableId);
        }else{
            toTaskIds.splice(source.index, 1);
            toTaskIds.splice(destination.index, 0, draggableId);
        }

        const copyColumn = column.map((e) =>
                                    {
                                        if(e.id === source.droppableId){
                                            e.taskIds = newTaskIds ;

                                        }
                                        if(e.id === destination.droppableId){
                                            e.taskIds = toTaskIds ;
                                        }
                                        return e;
                                    });
        setColumns(copyColumn)
    }, [column]);



    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex justify-center">
                {columnOrder.map((columnId) => {
                    const column_f = column.filter((column) => column.id === columnId);
                    const columns = column_f[0];
                    const taskId_f = columns.taskIds;
                    const tasks = taskId_f.map((taskId) => task.filter((e)=> e.id ===taskId ));
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