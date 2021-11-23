import {  Link } from "react-router-dom";

const Home = ()=>{
    return(
        <div className="container">
            <div className="row">
            <div className="col-md-8">
                <div className="card p-2">
                    <div className="card-body">
                    <h3>Home Screen</h3>
                    <p>If already have account then <Link to="login">Login</Link></p>
                    <p>Otherwise <Link to="register">Register</Link></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;