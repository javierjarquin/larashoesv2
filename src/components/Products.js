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
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tipo Producto</option>
                        <option value="1">Calzado</option>
                        <option value="2">Ropa</option>
                        <option value="3">Novedades</option>
                    </select>
                </div>
                <div className="input-group col-md">
                    <button type="button" className="btn btn-primary">Buscar</button>
                </div>
            </div>
            <br></br>
            <table className="table table-dark table-bordered">
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