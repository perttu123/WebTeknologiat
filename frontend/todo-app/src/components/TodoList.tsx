import TodoItem from "./TodoItem";
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
interface Todo {
    _id: string;
    task: string;
  }
  
  interface ListProps {
    data: Todo[];
    updateData: ()=>void;
  }
  
export default function AddList({data, updateData}:ListProps){


    return (<>      
      <Container className="mx-auto" style={{ maxWidth: '600px' }}>
        <ListGroup variant="flush">
          {data.map((item)=>(
            <TodoItem key={item._id} data={item} updateData={updateData}/>
          ))}
        </ListGroup>
      </Container>         
    </>)
}