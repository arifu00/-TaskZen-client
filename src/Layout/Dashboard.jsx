import { Outlet } from "react-router-dom";
import Nav from "../Pages/Dashboard_Pages/Nav/Nav";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-4 min-h-screen">
        <Nav />
        <Outlet  className=""/>
      </div>
    </div>
  );
};

export default Dashboard;
