import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo/to-do-list.png";
import { IoCreateOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Nav = () => {
  const navList = (
    <>
      <li className="hover:text-red-600">
        <NavLink
          to="/dashboard/all-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#304D30] font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            All Tasks <FaTasks className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-600">
        <NavLink
          to="/dashboard/create-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#304D30] font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            Create Task <IoCreateOutline className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-600">
        <NavLink
          to="/dashboard/manage-task"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#304D30] font-bold underline"
              : ""
          }
        >
          <div className="flex items-center gap-2 text-base md:text-xl">
            Manage Task <MdManageHistory className="text-lg md:text-2xl" />
          </div>
        </NavLink>
      </li>
      <li  className="hover:text-red-600">
        <NavLink
          to="/dashboard/profile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#304D30] font-bold underline"
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
      <div className="flex font-lora -mt-5 ">
        {/* DashBoard menu item */}
        <div className="w-32 md:w-52 lg:w-72 min-h-screen bg-[#8cc4ea] ">
          <div className="px-3 md:px-9 pt-10 mb-12">
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
          
          <ul className="px-9 text-sm font-medium space-y-4">{navList}</ul>
        </div>
      </div>
  );
};

export default Nav;
