import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import logo from "../../../assets/logo/to-do-list.png";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: true,
          timer: 1200,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navList = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUS"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <li
          onClick={handleLogOut}
          className="btn btn-outline text-lg rounded-lg btn-primary md:ml-12"
        >
          Log Out
        </li>
      ) : (
        <li className="btn btn-outline text-lg rounded-lg btn-primary md:ml-12">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="drawer font-lora">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-[#BBE1FA]">
            <Container>
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 justify-center lg:justify-start font-roboto text-xl md:text-3xl font-semibold">
                <Link to="/">
                  <div className="flex gap-2 items-center ">
                    <img className="w-12 h-12 object-cover" src={logo} alt="" />
                    TaskZen
                  </div>
                </Link>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal items-center text-base font-roboto">
                  {/* Navbar menu content here */}
                  {navList}
                </ul>
              </div>
            </Container>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-56 md:w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {navList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
