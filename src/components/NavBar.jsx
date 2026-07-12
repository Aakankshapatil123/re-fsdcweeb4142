import { Link } from "react-router";

const NavBar = ({ user }) => {

  return (
    <div>
      <ul>
        {
          !user && (
            <li>
              <Link
                to={"/"}
              >Home</Link>
            </li>
          )
        }

        {
          !user && (
            <li>
              <Link
                to={"/register"}
              >Register</Link>
            </li>
          )
        }

        <li>
          {
            user ? (
              <div>
                <p>Welcome {user.email}
                  &nbsp;&nbsp;
                  <Link
                    to={"/logout"}
                  >Logout</Link>
                </p>
              </div>
            ) : (
              <Link
                to={"/login"}
              >Login</Link>
            )
          }
        </li>
      </ul>
    </div>
  )
}

export default NavBar;