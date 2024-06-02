import { Link } from "react-router-dom";

const Login=()=>{
    return (
        <div id="login">
        <h1>This is login page</h1>
        <button><Link to={"/home"}>next page</Link></button>
        </div>
    )
}
export default Login;