
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>

          <CardComponent/>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          
          <CardComponent/>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function CardComponent(){

  return (<>
    <Card>
      <Card.Header>Blogs</Card.Header>
      <Card.Body>
        <Card.Title>Blog Articles</Card.Title>
        <Card.Text>
         sdgdsg
        </Card.Text>
      </Card.Body>
    </Card>
    </>);
}



function Blogs(){
  return(<>    
       
       <CardComponent/>
       <BasicExample/>
  </>);
}

export default Blogs;