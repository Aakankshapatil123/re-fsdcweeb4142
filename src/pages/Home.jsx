import { useNavigate } from "react-router"

const Home = () => {
   const navigate = useNavigate();

  return (
    <div>
       <h1>Notes Application</h1>
      <p>
        Welcome to the Notes Application! This app allows you to create, edit, and manage your notes efficiently. You can organize your thoughts, ideas, and important information all in one place. Start by adding a new note and explore the features available to enhance your note-taking experience.
      </p>

      <button onClick={() => navigate('/register')}>Register</button> &nbsp;
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  )
}

export default Home
