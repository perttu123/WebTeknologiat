
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function MyComponent() {
    const [email, setEmail] = useState("");
    const [showOrHide, setShowOrHide] = useState(false);
    
    const handleSub = () => {
        setShowOrHide(true); // Toggle showOrHide state
      };
      const handleAlertClose = () => {
        setShowOrHide(false); // Close the alert by setting showOrHide to false
      };

    return (<>
      <Card>
        <Card.Header>Welcome</Card.Header>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Input onInputChange={(value)=>setEmail(value)}/>
      <SubButton click={handleSub}/>
      <AlertMessage message={email} showOrHide={showOrHide} onClose={handleAlertClose}/>
      </>);
  }
  function Input({onInputChange}){
    const [input, setInput] = useState("");
    const handleInput = (e) =>{
        setInput(e.target.value);
        onInputChange(e.target.value);
    }
    return(<>
    <Form>
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={input} onChange={handleInput} type="email" placeholder="name@example.com" />
        </Form.Group> 
      </Form>
      </>)
  }
  function SubButton({click}){
    return(<> <Button variant="primary" onClick={click}>Subscribe</Button>{' '}</>)
  }

  function AlertMessage({message, showOrHide, onClose}) {
    
    if (showOrHide) {
      return (
        <Alert variant="success" onClose={onClose} dismissible>
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