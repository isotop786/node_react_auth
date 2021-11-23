import {useState,useEffect} from 'react'
// import {Redirect} from 'react-router-dom'

import { Link, Navigate } from 'react-router-dom';




const Register = ()=>{

    
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [msg,setMsg] = useState('')
  const [showMSg,setShowMsg] = useState()

  useEffect(() => {

    },[])

 

 async function registerUser(e){
    e.preventDefault();
    const res = await fetch('http://localhost:9000/api/register',
    {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },

      body: JSON.stringify({
        firstName,lastName,email,password
      })
    }
   )

   setFirstName('')
   setLastName('')
   setEmail('')
   setPassword('')
   setPasswordConfirm('')

   const data = await res.json()

   console.log(data)
    if(data.status =='ok'){
        setMsg(data.msg)
        setShowMsg(true)
    }
  
  }

  return (
    <div
    className="col-md-5"
    style={{textAlign:'center'}}>
      <h2>Register</h2>
      <form action="#" onSubmit={registerUser}>
         <input className="form-control" type="text" name="" id="" placeholder="First Name" 
         value={firstName} onChange={e=>setFirstName(e.target.value)}
         />
         <br />
         <input className="form-control" type="text" name="" id="" placeholder="Last Name"
         value={lastName} onChange={e=>setLastName(e.target.value)}
         />
         <br />
         <input className="form-control" type="email" name="" id="" placeholder="Email" 
         value={email} onChange={e=> setEmail(e.target.value)}
         />
         <br />
         <input className="form-control" type="password" name="" id="" placeholder="Password" 
         value={password} onChange ={e=> setPassword(e.target.value)}
         />
         <br />
         <input className="form-control" type="password" name="" id="" placeholder="Password Confirm" 
         value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}
         />
         <br />
         <input className="btn btn-primary btn-block" type="submit" value="Register" />
      </form>
      <p>{msg}</p>
        {showMSg && <Link to="login">Login</Link>}
    </div>
   );


}

export default Register;