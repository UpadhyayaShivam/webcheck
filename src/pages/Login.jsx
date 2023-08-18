
import react ,{ useState } from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Login.css';

const Login = () =>{

    const [username ,setUsername] = useState('');
    const [password ,setPassword] = useState('');

    const HandleLogin = ()=>{
        if(username === 'user' && password === 'password'){
            toast.success('Login successful!', {
                position: toast.POSITION.TOP_CENTER,
              });
            }
            else{
                toast.error('Invalid credentials', {
                    position: toast.POSITION.TOP_CENTER,
                  });
            }
    };


    return(
        <>
             <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={HandleLogin}>
          Login
        </button>
      </div>
      <ToastContainer />
    </div>
        </>
    )
}

export default Login;