import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faBoxes, faClipboardList, faTruck, faShoppingCart, faStore, faBoxesAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../styles/sidebar.css'; // Archivo de estilos para el sidebar

const Sidebar = () => {
  const [minimized, setMinimized] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setMinimized(!minimized);
  };

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <div className={`sidebar ${minimized ? 'minimized' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        {minimized ? '->' : '<-'}
      </div>
      <ul>
        <li className="profile-item">
          <img src="./Logo.gif" alt="Profile" className={`profile-img ${minimized ? 'minimized' : ''}`} />
        </li>
        <li className={activeItem === 'Marcas' ? 'active' : ''} onClick={() => handleItemClick('Marcas', '/brands')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faTags} />
            {!minimized && <span>Marcas</span>}
          </button>
        </li>
        <li className={activeItem === 'Modelos' ? 'active' : ''} onClick={() => handleItemClick('Modelos', '/models')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faBoxes} />
            {!minimized && <span> Modelos</span>}
          </button>
        </li>
        <li className={activeItem === 'Productos' ? 'active' : ''} onClick={() => handleItemClick('Productos', '/products')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faClipboardList} />
            {!minimized && <span> Productos</span>}
          </button>
        </li>
        <li className={activeItem === 'Proveedores' ? 'active' : ''} onClick={() => handleItemClick('Proveedores', '/suppliers')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faTruck} />
            {!minimized && <span> Proveedores</span>}
          </button>
        </li>
        <li className={activeItem === 'Orden de compra' ? 'active' : ''} onClick={() => handleItemClick('Orden de compra', '/purchase-orders')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faShoppingCart} />
            {!minimized && <span> Orden de compra</span>}
          </button>
        </li>
        <li className={activeItem === 'Recepción de Mercancia' ? 'active' : ''} onClick={() => handleItemClick('Recepción de Mercancia', '/receiving')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faStore} />
            {!minimized && <span> Recepción de Mercancia</span>}
          </button>
        </li>
        <li className={activeItem === 'Inventario' ? 'active' : ''} onClick={() => handleItemClick('Inventario', '/inventory')}>
          <button className='btn btn-dark container-fluid'>
            <FontAwesomeIcon icon={faBoxesAlt} />
            {!minimized && <span> Inventario</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
