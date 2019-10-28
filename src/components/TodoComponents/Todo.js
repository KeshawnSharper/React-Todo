import React,{ Component }from 'react';
import styled from 'styled-components'

function Todo (props){
    const Ul = styled.ul`
    list-style:none;
    `
   return(
   <div onClick={props.onClick}>
                <Ul>
                <li className={`${props.item.completed ? "completed" : ""}`}>{props.item.task}</li>
                </Ul>
            </div>
        )
}

export default Todo;
