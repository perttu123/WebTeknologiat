
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  const cardStyle = {
    margin: '20px', // Add margin to create space between cards
  };
  return (
    <Accordion defaultActiveKey="0" style={cardStyle}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>

          <CardComponent blogTitle="Blog title 1" teksti="Here's some content for the first blog article"/>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          
          <CardComponent blogTitle="Blog title 2" teksti="Here's some content for the second blog article"/>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          
          <CardComponent blogTitle="Blog title 3" teksti="Here's some content for the third blog article"/>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

function CardComponent({teksti, blogTitle}){

  return <>
    <Card>
      <Card.Header>{blogTitle}</Card.Header>
      <Card.Body>
        <Card.Text>
         {teksti}
        </Card.Text>
      </Card.Body>
    </Card>
    </>;
}
function BlogArticles() {
  const cardStyle = {
    margin: '20px', // Add margin to create space between cards
  };
  return (
    <Card style={cardStyle}>
      <Card.Header as="h5">Blogs</Card.Header>
      <Card.Body>
        <Card.Title>Blog Articles</Card.Title>
        <Card.Text>
          Find the latest articles and blog posts here.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



function Blogs(){
  return(<>    
       
       <BlogArticles/>
       <BasicExample/>
  </>);
}

export default Blogs;