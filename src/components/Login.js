import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/circles.css'; // Importa los estilos para los círculos
//import '../scripts/circles.js'; // Importa el script para generar los círculos

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación...
    navigate('/dashboard');
  };

return (  
    <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2 className='text-center' style={{ fontFamily: 'Lato'}}>Ingresar</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ fontFamily: 'Lato'}}>Correo:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password" className="form-label" style={{ fontFamily: 'Lato'}}>Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary text-center" style={{ fontFamily: 'Lato'}}>Entrar</button>
                            </div>  
                        </form>
                        <p className="mt-3 text-center" style={{ fontFamily: 'Lato'}}>
                            ¿No tienes una cuenta? <Link to="/signup" className="btn btn-link">Regístrate</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;
