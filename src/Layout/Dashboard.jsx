import { Outlet } from "react-router-dom";
import Nav from "../Pages/Dashboard_Pages/Nav/Nav";

const Dashboard = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Dashboard;