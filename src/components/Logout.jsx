// import axios from "axios";
// import { useEffect } from "react";
// import { useNavigate } from "react-router";

// const Logout = () => {

//   const navigate = useNavigate();

//   useEffect(() => {
//     // make an api call to logout the user
//     axios
//       .post('http://localhost:3001/auth/logout', {}, { withCredentials: true })
//       .then((response) => {
//         alert(response.data.message);

//         navigate("/login");
//       })
//       .catch(error => {
//         alert(error.response.data.message);
//       })
//   }, []); 

//   return (
//     <div>Logging out...Please wait.</div>
//   )
// }

// export default Logout;




import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false);
  const [message, setMessage] = useState("Logging out... Please wait.");

  useEffect(() => {
    if (hasLoggedOut.current) return;
    hasLoggedOut.current = true;

    const logout = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;

        const response = await axios.post(
          `${API_URL}/auth/logout`,
          {},
          { withCredentials: true }
        );

        setMessage(response.data.message || "Logged out successfully.");

        navigate("/Login", { replace: true });
      } catch (error) {
        setMessage(
          error.response?.data?.message ||
            "Logout failed. Please try again."
        );
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="rounded-2xl bg-white p-8 text-center shadow-md">
        <h2 className="text-xl font-bold text-slate-800">NoteSpace</h2>
        <p className="mt-3 text-slate-600">{message}</p>
      </div>
    </div>
  );
};

export default Logout;
