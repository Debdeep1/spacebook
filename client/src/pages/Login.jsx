import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function Login() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Signup</Nav.Link>
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
          Welcome Back Traveller!
        </Card.Text>
        <Card.Text>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </Card.Text>
        <Button href="/signup" variant="primary">Don't have an account?</Button>
      </Card.Body>
    </Card>
  );
}

export default Login;