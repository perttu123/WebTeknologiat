
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function MyComponent() {
    const [email, setEmail] = useState("");
    const [showOrHide, setShowOrHide] = useState(false);
    const [input, setInput] = useState("");
    
    function handleSub()  {
      if(input==="")return;
        setShowOrHide(true);
        setEmail(input);       
        setInput("");
      };
      const handleAlertClose = () => {
        setShowOrHide(false); // Close the alert by setting showOrHide to false
      };
      const cardStyle = {
        margin: '20px', // Add margin to create space between cards
      };
    return (<>
      <Card style={cardStyle}>
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Input inputValue={input} setInput={(value)=>setInput(value)}/>
      <SubButton click={handleSub} />
      <AlertMessage message={email} showOrHide={showOrHide} onClose={handleAlertClose}/>
      </>);
  }
  function Input({setInput, inputValue}){
    
    const handleInput = (e) =>{
        setInput(e.target.value);
    }
    const cardStyle = {
      margin: '20px', // Add margin to create space between cards
    };
    return(<>
    <Form style={cardStyle}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={inputValue} onChange={handleInput} type="email" placeholder="name@example.com" />
          <Form.Text>Subscribe to our newsletter for updates.</Form.Text>
        </Form.Group> 
      </Form>
      </>)
  }
  function SubButton({click}){
    const cardStyle = {
    margin: '20px', // Add margin to create space between cards
  };
    return(<> <Button style={cardStyle} variant="primary" onClick={click}>Subscribe</Button>{' '}</>)
  }

  function AlertMessage({message, showOrHide, onClose}) {
    const cardStyle = {
      margin: '20px', // Add margin to create space between cards
    };
    if (showOrHide) {
      return (
        <Alert style ={cardStyle} variant="success" onClose={onClose} dismissible>
          <Alert.Heading>Subscribed</Alert.Heading>
          <p>
            Succesfully subscribed with email: {message}
          </p>
        </Alert>
      );
    }   
  }
  
function Home(){
    return (<>
    <MyComponent/>   
    </>);   
}

  export default Home;