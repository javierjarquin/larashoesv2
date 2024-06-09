import React, { useEffect } from "react";

const Productos = () => {
  
    useEffect(() => {

    }, []);

    return(
        <div className="products container-fluid">
            <h1 className="display-4">Productos</h1>
            <div className="row g-3">
                <div className="input-group col-md">
                    <span className="input-group-text" id="clave">#</span>
                    <input type="text" className="form-control" placeholder="Clave del producto" aria-label="Clave del producto" aria-describedby="Clave"></input>
                </div>
                <div className="input-group col-md">
                    <span className="input-group-text" id="description">Descripción</span>
                    <input type="text" className="form-control" placeholder="Descripción del producto" aria-label="Descripción del producto" aria-describedby="Description"></input>
                </div>
                <div className="input-group col-md">
                
                </div>
                <div className="input-group col-md">

                </div>
                <div className="input-group col-md">

                </div>
                <div className="input-group col-md">
                    <button type="button" className="btn btn-primary">Buscar</button>
                </div>
            </div>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Modelo</th>
                        <th>Descripción</th>
                        <th>Tipo Producto</th>
                        <th>Estatus</th>
                        <th>Medida</th>
                    </tr>
                </thead>

            </table>
        </div>
    );

};

export default Productos;