import React, { useEffect, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
// import './main.css';

const style = {
  bg: `h-screen w-screen p-4 bg-gray-100`,
  container: `bg-white max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-black text-white`,
  count: `text-center pt-2`
}

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')



  // create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    
    if(input === '') {
      alert('Please enter a valid todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    })
    setInput('')
  }
  // Read todo from firebase
  useEffect(()=> {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc)=>{
        todoArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todoArr)
    });
    return () => unsubscribe();
  }, []);
  // update todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed : !todo.completed
    })
  }
  // delete todo
  const deleteTodo = async (id) => {
  await  deleteDoc(doc(db, 'todos', id))
  }

  // editTodo


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} >
          <input value={input}
          onChange={(e)=> setInput(e.target.value)} 
          className={style.input} 
          type='text' 
          placeholder='Add Todo'  />

          {input === ''? null : <button className={style.button} onClick={createTodo}><AiOutlinePlus size={30} /></button>}
          
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? <p className={style.count}>No Tasks</p>: <p className={style.count}>{`You have ${todos.length} todos`}</p>}
      </div>
    </div>
  );
}

export default App;
