import NavbarCompo from "./components/NavbarComponent";
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import CreatePost from "./components/CreatePost";
import { createContext, useEffect, useReducer, useContext } from "react";
import {reducer, initialState} from "./reducers/userReducer"

export const UserContext = createContext()

const Routing = ()=>{
  const navigate = useNavigate()
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("USER"))
    
    if(user){
      dispatch({type:"USER", payload:user})
      navigate(`/`)
    }
  },[])
  return(
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/create" element={<CreatePost/>} />
  </Routes>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer,initialState)

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Routing/>
    </UserContext.Provider>
    </>
  );
}

export default App;
