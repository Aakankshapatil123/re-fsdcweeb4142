// import { Link } from "react-router";

// const NavBar = ({ user }) => {

//   return (
//     <div>
//       <ul>
//         {
//           !user && (
//             <li>
//               <Link
//                 to={"/"}
//               >Home</Link>
//             </li>
//           )
//         }

//         {
//           !user && (
//             <li>
//               <Link
//                 to={"/register"}
//               >Register</Link>
//             </li>
//           )
//         }

//         <li>
//           {
//             user ? (
//               <div>
//                 <p>Welcome {user.email}
//                   &nbsp;&nbsp;
//                   <Link
//                     to={"/logout"}
//                   >Logout</Link>
//                 </p>
//               </div>
//             ) : (
//               <Link
//                 to={"/login"}
//               >Login</Link>
//             )
//           }
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default NavBar;





import { Link, useLocation } from "react-router";

const NavBar = ({ user }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 7v14" />
              <path d="M3 18V5a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3 3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-5a3 3 0 0 0-3 2 3 3 0 0 0-3-2H4a1 1 0 0 1-1-1Z" />
            </svg>
          </div>

          <div>
            <span className="block text-xl font-extrabold tracking-tight text-slate-900">
              Note<span className="text-indigo-600">Space</span>
            </span>
            <span className="block text-xs text-slate-500">
              Your thoughts, organized.
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {!user ? (
            <>
              <Link
                to="/"
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  location.pathname === "/"
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-indigo-700"
                }`}
              >
                Home
              </Link>

              <Link
                to="/Login"
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  location.pathname.toLowerCase() === "/login"
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-indigo-700"
                }`}
              >
                Login
              </Link>

              <Link
                to="/Register"
                className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              {/* User Profile */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                  {(user.email || "U").charAt(0).toUpperCase()}
                </div>

                <div className="max-w-48">
                  <p className="text-xs text-slate-500">
                    {isDashboard ? "Welcome back" : "Signed in as"}
                  </p>
                  <p
                    className="max-w-48 truncate text-sm font-semibold text-slate-800"
                    title={user.email}
                  >
                    {user.email}
                  </p>
                </div>
              </div>

              <Link
                to="/logout"
                className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                Logout
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
