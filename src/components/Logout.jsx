import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    // make an api call to logout the user
    axios
      .post('http://localhost:3001/auth/logout', {}, { withCredentials: true })
      .then((response) => {
        alert(response.data.message);

        navigate("/login");
      })
      .catch(error => {
        alert(error.response.data.message);
      })
  }, []); 

  return (
    <div>Logging out...Please wait.</div>
  )
}

export default Logout;