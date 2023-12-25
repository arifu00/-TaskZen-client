import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import logo from "../../../assets/logo/to-do-list.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { IoCreateOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const { user } = useContext(AuthContext);
  const navList = (
    <>
      <li className="hover:text-red-400">
        <NavLink
          to="/all-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            All Tasks <FaTasks className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-400">
        <NavLink
          to="/create-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            Create Task <IoCreateOutline className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-400">
        <NavLink
          to="/manage-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            Manage Task <MdManageHistory className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-400">
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            Go Profile <CgProfile className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div className="flex font-lora -mt-5 ">
        {/* DashBoard menu item */}
        <div className="w-32 md:w-52 lg:w-72 min-h-screen bg-[#264653] text-[#fff]">
          <div className="px-3 md:px-9 pt-10 border border-white ">
            <Link to="/">
              <div className="flex gap-2 items-center text-base md:text-2xl lg:text-3xl">
                <img
                  className="w-6 h-6 md:w-12 md:h-12 object-cover"
                  src={logo}
                  alt=""
                />
                TaskZen
              </div>
            </Link>
          </div>
          {/* user info */}
          <div className="px-3 md:px-9 pt-2 lg:pt-5 mb-12">
            <div className=" text-base md:text-2xl lg:text-3xl">
              <img
                className="rounded-full w-10 h-10 md:w-20 md:h-20 mx-auto object-cover border-blue-700 border-4"
                src={user?.photoURL}
                alt=""
              />
              <h5 className="text-center text-xl lg:mt-3">
                {user?.displayName}
              </h5>
            </div>
          </div>
          <ul className="px-9 text-base font-medium space-y-4">{navList}</ul>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
