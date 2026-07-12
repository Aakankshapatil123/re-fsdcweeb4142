import { useLoaderData, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const DashboardWrapper = () => {

  const user = useLoaderData();
  const navigate = useNavigate();

  // if the user is not logged in, we can redirect them to the login page
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <NavBar
        user={user}
      />
    </div>
  )
}

export default DashboardWrapper;