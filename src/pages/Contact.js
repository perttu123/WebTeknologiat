import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function CardComponent(){
  const cardStyle = {
    margin: '20px', // Add margin to create space between cards
  };
  return (<>
    <Card style={cardStyle}>
      <Card.Header>Contact Me</Card.Header>
      <Card.Body>
        <Card.Text>
         For questions or feedback, please choose a category below:
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={cardStyle}>
      <Card.Header>General Inquiry</Card.Header>
      <Card.Body>
        <Card.Text>
         For questions or feedback, please choose a category below:
        </Card.Text>
        <GeneralButton/>
      </Card.Body>
    </Card>
     <Card style={cardStyle}>
      <Card.Header>Contact Me</Card.Header>
      <Card.Body>
        <Card.Text>
         For questions or feedback, please choose a category below:
        </Card.Text>
        <FeedbackButton/>
      </Card.Body>
    </Card>
    <Card style={cardStyle}>
      <Card.Header>Contact Me</Card.Header>
      <Card.Body>
        <Card.Text>
         For questions or feedback, please choose a category below:
        </Card.Text>
        <SupportButton/>k
      </Card.Body>
    </Card>
    </>);
}

function GeneralButton(){
  return(<> <Button variant="primary">Subscribe</Button>{' '}</>)
}
function FeedbackButton(){
  return(<><Button variant="warning">Warning</Button>{' '}</>)
}
function SupportButton(){
  return(<><Button variant="secondary">Secondary</Button>{' '}</>)
}

function Contact(){
  return(<>
    <CardComponent/>
  </>)
}
  export default Contact;