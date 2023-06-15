import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'


const style = {
    li: `flex justify-between bg-slate-200 p-4 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-2 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer `,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
    return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input type='checkbox' onChange={()=> toggleComplete(todo)} checked={todo.completed ? 'checked': ''} />
            <p className={todo.completed ? style.textComplete : style.text} onClick={()=> toggleComplete(todo)} >{todo.text}</p>
        </div>
        <div className="buttons">
        <button onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
        </div>
    </li>
)
}

export default Todo