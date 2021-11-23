import {useState} from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router";
import Post from './Post'
const Login = ({auth,setAuth})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [auth, setAuth] = useState(false)

    const login = async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:9000/api/login',
        {
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
    
          body: JSON.stringify({
            email,password
          })
        }

       

       )

       const data = await res.json();

       console.log(data)

       setEmail('');
       setPassword('')

       if(data.user){
          setAuth(true)
       }
    }
    
    return(
        <div >
            

            {auth ? (
                <div>
                    <div className="row my-4 p-2 text-center">
                        
                    <Post />
                    </div>
                  
                </div>
            ) 
            :
            <div className="mt-4 pt-3">
            <h3>Login</h3>
            <div className="row">
                <div className="col-md-6">
                <form action="#" onSubmit={login}>
                <div className="form-group">
                    {/* <label htmlFor="Email">Email</label> */}
                    <input type="email" name="" className="form-control" id="" 
                    placeholder="Email ID"
                    value={email} onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {/* <label htmlFor="Passwrod">Password</label> */}
                    <input type="password" name=""
                    placeholder="Password"
                    className="form-control" id=""
                    value={password} onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                </div>

            </form>

                </div>
            </div>
            </div>
        
        }
        </div>
    )
}

export default Login;