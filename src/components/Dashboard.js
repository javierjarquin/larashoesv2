// Dashboard.js
import React from 'react';
import Sidebar from './MenuSidebar';
import Brands from './Brands';
import Models from './Models';

const Dashboard = () => {
  return (
    <div className="dashboard"> 
        <Sidebar></Sidebar>
        <Brands />
        <Models />
    </div>
  );
};

export default Dashboard;
