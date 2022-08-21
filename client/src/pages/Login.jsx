import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import "./styles/login.css"

function Login() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#login">
          <Nav.Item>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title className='Logo'>SpaceBook</Card.Title>
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