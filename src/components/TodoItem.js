import React from "react";
import { Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
function DeleteButton({click}){
  return (<>
   <Button variant="outline-danger" onClick={click}>Delete</Button>{' '}
  </>);
  }

  
export default function TodoItem({ todo, deleteHandle}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox=()=>{
    setIsChecked(!isChecked)
  }
  return (
    <li>
      {isChecked ? (
        <del>{todo.text+"   "}</del> 
      ) : (
        <span>{todo.text+"   "}</span> 
      )}
      <input type="checkbox" checked={todo.checked} onChange={handleCheckbox}/>
      <DeleteButton click={() => deleteHandle(todo.id)}/>   
    </li>
  );
}
