import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import "./styles/signup.css"
function Signup() {

  const navigate = useNavigate()
  const [name,setName]= useState("")
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const PostData =()=>{
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      alert("Invalid email!")
      return
    }
    fetch("/signup",{
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        name,
        password,
        email,
      })
    }).then(res=>res.json()).then(data=>{if(data.error){
      alert(data.error); return;
    } else{
      navigate(`/login`)
    } console.log(data)})
  }
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#signup">
          <Nav.Item>
            <Nav.Link className="NavItemLinks" target="_blank" href="#signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="NavItemLinks" target="_blank" href="#disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title className='Logo NavItemLinks'>SpaceBook</Card.Title>
        <Card.Text>
          Welcome Traveller!
        </Card.Text>
        <Card.Text>
        <input type="text" placeholder="User Name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Card.Text>
        <Button href="/login" variant="primary">Already have an account?</Button>
        <Button onClick={()=>PostData()} variant="success">Sign Up</Button>
      </Card.Body>
    </Card>
  );
}

export default Signup;