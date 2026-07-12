import axios from "axios";

const authLoader = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/auth/me', {
            withCredentials: true
        });
        // console.log(response.data)
        return response.data.user;
    } catch (error) {
        return null;
    }
}

export default authLoader;