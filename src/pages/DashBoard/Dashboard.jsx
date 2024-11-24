import React from "react";
import Nav from "../../component/Form/Nav/Nav";
import SideBar from "../../component/Form/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <SideBar
        logo="DashStack"
        menu={[{name:"products",link:""}, {name:"favorate",link:"/Favoraits"}, {name:"orderlist",link:"/Orderlist"}]}
      
      />
      <div className="child">
        <Nav />
        <div className="Outlet">   <Outlet /></div>
     
      </div>
    </div>
  ); 
};

export default Dashboard;
