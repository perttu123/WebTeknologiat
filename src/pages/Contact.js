import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function CardComponent(){
  const cardStyle = {
    margin: '20px', // Add margin to create space between cards
  };
  
  return (<>
    <Card style={cardStyle}>
      <Card.Header style={{fontWeight: 'bold', fontSize: '20px'}}>Contact Me</Card.Header>
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
         For general inquiries, please email us at:
        </Card.Text>
        <GeneralButton/>
      </Card.Body>
    </Card>
     <Card style={cardStyle}>
      <Card.Header>Feedback</Card.Header>
      <Card.Body>
        <Card.Text>
         We value your feedback! Please share your comments at:
        </Card.Text>
        <FeedbackButton/>
      </Card.Body>
    </Card>
    <Card style={cardStyle}>
      <Card.Header>Support</Card.Header>
      <Card.Body>
        <Card.Text>
         Need assistance? Contact our support team at:
        </Card.Text>
        <SupportButton/>
      </Card.Body>
    </Card>
    </>);
}

function GeneralButton(){
  return(<> <Button variant="primary">general@example.com</Button>{' '}</>)
}
function FeedbackButton(){
  return(<><Button variant="warning">feedback@example.com</Button>{' '}</>)
}
function SupportButton(){
  return(<><Button variant="secondary">support@example.com</Button>{' '}</>)
}

function Contact(){
  return(<>
    <CardComponent/>
  </>)
}
  export default Contact;