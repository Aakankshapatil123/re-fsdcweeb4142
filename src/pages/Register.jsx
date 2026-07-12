import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3001/auth/register', {
        name,
        email,
        password
      })
      .then(res => {
        alert(res.data.message);

        navigate('/login');
      }) 
      .catch(e => {
        alert(e.response.data.message);
      })
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="name..." value={name} onChange={e => setName(e.target.value)}
        required
        /> &nbsp;
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
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register;