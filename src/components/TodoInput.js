
import { useState } from "react";
 import { Button} from "react-bootstrap";
 import 'bootstrap/dist/css/bootstrap.min.css';

function AddButton({click}){
return (<>
<Button variant="primary" onClick={click}>Add</Button>{' '}
</>);
}

export default function Input({addItemToTask}){
  const [item, setItem] = useState("");
  

  function Submit(){
    if(item==="")return
    addItemToTask(item);
     setItem("");
  }

  return(<>
    <div class="title">Todo List</div>
    <input value={item}
    onChange={(e)=>setItem(e.target.value)}/>
    <AddButton click={Submit}/>
  </>);
}
