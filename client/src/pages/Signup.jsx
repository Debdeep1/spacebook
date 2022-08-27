import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import "./styles/signup.css"
function Signup() {

  const [name,setName]= useState("")
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const PostData =()=>{
    fetch("http://localhost:5000/signup",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name:"",
        password:"",
        email:"",
      })
    }).then(res=>res.json()).then(data=>{console.log(data)})
  }
  //5:51
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#signup">
          <Nav.Item>
            <a target="_blank" href="#signup">Signup</a>
          </Nav.Item>
          <Nav.Item>
            <a target="_blank" href="#disabled" disabled>
              Disabled
            </a>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title className='Logo'>SpaceBook</Card.Title>
        <Card.Text>
          Welcome Traveller!
        </Card.Text>
        <Card.Text>
        <input type="text" placeholder="User Name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Card.Text>
        <Button href="/login" variant="primary">Already have an account?</Button>
      </Card.Body>
    </Card>
  );
}

export default Signup;