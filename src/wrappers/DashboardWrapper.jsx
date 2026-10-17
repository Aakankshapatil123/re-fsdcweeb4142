// // import { useLoaderData, useNavigate } from "react-router";
// // import NavBar from "../components/NavBar";
// // import { useEffect } from "react";

// // const DashboardWrapper = () => {

// //   const user = useLoaderData();
// //   const navigate = useNavigate();

// //   // if the user is not logged in, we can redirect them to the login page
// //   useEffect(() => {
// //     if (!user) {
// //       navigate("/login");
// //     }
// //   }, [user]);

// //   return (
// //     <div>
// //       <NavBar
// //         user={user}
// //       />
// //     </div>
// //   )
// // }

// // export default DashboardWrapper;



// import { useLoaderData, useNavigate } from "react-router";
// import { useEffect } from "react";
// import NavBar from "../components/NavBar";

// const DashboardWrapper = () => {
//   const user = useLoaderData();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/Login", { replace: true });
//     }
//   }, [user, navigate]);

//   if (!user) {
//     return <div>Checking authentication...</div>;
//   }

//   return (
//     <div>
//       <NavBar user={user} />
//     </div>
//   );
// };

// export default DashboardWrapper;




import { useLoaderData, useNavigate } from "react-router";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Dashboard from "../pages/Dashboard";

const DashboardWrapper = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return <div>Checking authentication...</div>;
  }

  return (
    <div>
      <NavBar user={user} />
      <Dashboard />
    </div>
  );
};

export default DashboardWrapper;

