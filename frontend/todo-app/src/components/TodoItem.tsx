import { useState } from "react";
import { ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Todo {
    _id: string;
    task: string;
}
interface ListProps{
    data: Todo;
    updateData: ()=>void;
}

export default function TodoItem({ data, updateData }: ListProps) {

    const [edit, setEdit] = useState(data.task);
    const [showInput, setShowInput] = useState(false); 

    async function Delete(id:string){      
      await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE',
      });
      updateData();
      console.log("Deleted");
    }

    async function EditTask(id:String){
      setShowInput(!showInput);
      await fetch(`http://localhost:5000/edit/${id}`, {
        method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({task: edit}),
      }); 
      updateData();
      console.log("Edited");
    }

    return (
      <>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check
        type="checkbox"
        label={data.task}       
      />
      <div className="d-flex">
      
        {showInput?(<><Form.Control value={edit} onChange={(e)=>setEdit(e.target.value)} className="me-auto form-control-sm w-50"/>
        <Button variant="success" onClick={()=>EditTask(data._id)}>
          Save
        </Button></>
        ):(<Button variant="primary" onClick={()=>setShowInput(!showInput)}>
        Edit
      </Button>)}  
        <Button variant="danger" onClick={()=>Delete(data._id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
      </>
    );
}
  
