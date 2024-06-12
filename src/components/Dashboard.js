import React, { useState } from 'react';
import Sidebar from './MenuSidebar';
import Brands from './Brands';
import Models from './Models';
import Products from './Products';
import Providers from './Providers';
// Importa los demás componentes según sea necesario

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Marcas');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Marcas':
        return <Brands />;
      case 'Modelos':
        return <Models />;
      case 'Productos':
        return <Products/>;
      case 'Proveedores':
        return <Providers/>
      default:
        return <Brands />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
