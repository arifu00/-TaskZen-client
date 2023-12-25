import { NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";

const Nav = () => {
  return (
    <Container>
      <div className="flex font-lora -mt-5 ">
        {/* DashBoard menu item */}
        <div className="w-72 min-h-screen bg-[#264653] text-[#fff]">
          <div className="px-9 pt-10 mb-12">
            <h2 className="text-center text-2xl italic font-black mt-4">
              TaskZen
            </h2>
          </div>
          <ul className="px-9 text-base font-medium"></ul>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
