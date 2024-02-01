import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="col-span-2">
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link to="/dashboard/user">
            <li>User</li>
          </Link>
          <Link to="/dashboard/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </div>
      <div className="col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
