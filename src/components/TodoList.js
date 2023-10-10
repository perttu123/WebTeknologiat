// import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


import { useState } from "react";
  

export default function List(){
  const[items, setItems] = useState([]);

    function addTask(item){
      const newItem = {id: crypto.randomUUID(), text: item}
      setItems((prevItems) => [...prevItems, newItem]);
    }

    function DeleteTask(id){
      setItems((currentTasks)=>
      currentTasks.filter((task) => task.id !== id)) 
    }
    

  return(<>
  <TodoInput addItemToTask={addTask}/>
  <ul>
    {items.map((item)=>(
    <TodoItem key={item.id} todo={item} deleteHandle={DeleteTask} />))}
  </ul> 
  </>);
}
