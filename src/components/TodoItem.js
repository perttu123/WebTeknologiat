import React from "react";
import { Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteButton({click}){
  return (<>
   <Button variant="outline-danger" onClick={click}>Delete</Button>{' '}
  </>);
  }

  
export default function TodoItem({ todo, deleteHandle}) {
  return (
    <li>
      {todo.text}
      <input type="checkbox"/>
      <DeleteButton click={() => deleteHandle(todo.id)}/>   
    </li>
  );
}
