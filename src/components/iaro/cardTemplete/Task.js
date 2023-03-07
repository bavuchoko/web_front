import React from 'react';
import girl from '../../../assets/icons/girl.png'
import gamer from '../../../assets/icons/gamer.png'
import listSearch from '../../../assets/icons/list-search.png'
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 5px;
  padding: 3px 4px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
          props.isDragging
                  ? "#FFCA03"
                  : "white"};
  box-shadow: 5px 8px 10px rgba(56, 255, 0, 0.08);
`;
const WorkingSet = styled.div`
  margin-right: 6px;
  display: inline-block;
  width: auto;
  border-radius: 40px;
  border: none;
  padding: 3px 8px;
  font-size: 11px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDragging
        ? "#ffffff"
        : props.color};
  color: ${(props) =>
    props.isDragging
        ? "#262626"
        : "#ffffff"};
`;
const Content = styled.div`
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 4px;
  transition: background-color 0.2s ease;
  color: #5d5d5d;
  font-weight: 500;
  background-color: ${(props) =>
          props.isDragging
                  ? "#ffffff"
                  : "#ebf1f6"};
`;
const Task = React.memo(({task, index}) => {



    return (
        <div>
            <Draggable draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                    <Container
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div
                             isdragging={snapshot.isDragging.toString()}>
                            {task.workSet.map((work, idx) => (
                                <WorkingSet
                                    key={idx}
                                    color={task.color[idx]}
                                >
                                    {work}
                                </WorkingSet>
                            ))}

                        </div>


                        <div className="nodrag" >
                            <Content
                                className="rounded-md break-after-all"
                                isDragging={snapshot.isDragging}
                            >
                                {task.content}
                            </Content>
                        </div>
                        <div className="flex justify-between">
                            <img className="w-5 h-5 mr-1 mt-1.5" src={listSearch} />
                            <span className="inline-block mb-1 flex">
                                <img className="w-8 h-8 rounded-full mr-1 ml-1" src={girl} />
                                <img className="w-8 h-8 rounded-full mr-1 ml-1" src={gamer} />
                            </span>
                        </div>
                        {provided.placeholder}
                    </Container>
                )}

            </Draggable>
        </div>
    );
})
export default Task;
