
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
    const [errorMsg, setErrorMsg] = useState(false);
    
    function validateEmail(email) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return emailRegex.test(email);
    }

    function handleSub(){
      if(input==="" ||!validateEmail(input))
      {
        setErrorMsg(true);
        setShowOrHide(false);
        return;
      }
        setShowOrHide(true);
        setErrorMsg(false);
        setEmail(input);       
        setInput("");
      };
      const handleErrorClose = () =>{
        setErrorMsg(false);
      }
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
            This is the homepage of our website. Explore other sections using the navigation above.
          </Card.Text>
        </Card.Body>
      </Card>
      <Input inputValue={input} setInput={(value)=>setInput(value)}/>
      <SubButton click={handleSub} />
      <AlertMessage message={email} showOrHide={showOrHide} onClose={handleAlertClose}/>
      <ErrorMessage show={errorMsg} onClose={handleErrorClose}/>
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
          <Form.Control  type="email" value={inputValue} onChange={handleInput} placeholder="name@example.com" />
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
  function ErrorMessage({show, onClose}){
    const cardStyle = {
      margin: '20px', // Add margin to create space between cards
    };
    if (show) {
      return (
        <Alert style={cardStyle} variant="danger" onClose={onClose} dismissible>
          <Alert.Heading>Error!</Alert.Heading>
          <p>
            Enter a valid Email address.
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