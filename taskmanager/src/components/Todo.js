import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Todo = (props) => {
  return (
   <li className="list">
   
    {props.item}
    <span>
    <FaDeleteLeft onClick={e=>{
        props.deleteItem(props.index)
    }}/>
    </span>
   </li>
  )
}

export default Todo
