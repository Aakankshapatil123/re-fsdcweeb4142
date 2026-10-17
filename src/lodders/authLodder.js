// import axios from "axios";

// const authLoader = async (req, res) => {
//     try {
//         const response = await axios.get('http://localhost:3001/auth/me', {
//             withCredentials: true
//         });
//         // console.log(response.data)
//         return response.data.user;
//     } catch (error) {
//         return null;
//     }
// }

// export default authLoader;






import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const authLoader = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/me`, {
      withCredentials: true,
    });

    return response.data.user;
  } catch (error) {
    return null;
  }
};

export default authLoader;
