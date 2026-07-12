import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/auth/login', {
        email,
        password
      }, {
        withCredentials: true
      })
      .then(res => {
        alert(res.data.message);

        navigate('/dashboard');
      }) 
      .catch(e => {
        alert(e.response.data.message);
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /> &nbsp;
        <input type="password" placeholder="password..."
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /> <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;