import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Signup() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#signup">
          <Nav.Item>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>SpaceBook</Card.Title>
        <Card.Text>
          Welcome Traveller!
        </Card.Text>
        <Card.Text>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </Card.Text>
        <Button href="/login" variant="primary">Already have an account?</Button>
      </Card.Body>
    </Card>
  );
}

export default Signup;