import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import "./styles/login.css"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const PostData =()=>{
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      alert("Invalid email!")
      return
    }
    fetch("/signin",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        password,
        email,
      })
    }).then(res=>res.json()).then(data=>{console.log(data); if(data.error){
      alert(data.error);
    } else{
      navigate(`/`)
      alert("Signed In Successfully!")
    }}).catch(err=>{
      console.log(err)
    })
  }
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
        <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Card.Text>
        <Button href="/signup" variant="primary">Don't have an account?</Button>
        <Button onClick={()=>PostData()} variant="primary">Login</Button>
      </Card.Body>
    </Card>
  );
}

export default Login;