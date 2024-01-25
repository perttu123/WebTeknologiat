
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Stack, Form, Button } from 'react-bootstrap';

interface struct{
  updateData: ()=>void
}

const AddTodo = ({ updateData }: struct) => {

    const [input, setInput] = useState("");

    async function addTask() { 
      if (input === "") return;
      await fetch('http://localhost:5000/addTask', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: input}),
      })
      setInput("");
      updateData();
      console.log("Added");
    }


    return (<>
    <div className="w-25 p-3 mx-auto text-center">
    <Stack direction="horizontal" gap={3} >
      <Form.Control value={input} onChange={(e)=>(setInput(e.target.value))} className="me-auto" placeholder="Add your task here..." />
      <Button variant="primary" onClick={()=>addTask()}>Add</Button>
    </Stack>
    </div>
    </>)
}

export default AddTodo;