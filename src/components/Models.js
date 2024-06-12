import React, { useEffect } from "react";

const Models = () => {

    useEffect(() => {

    }, []);

    return(
        <div className="models container-fluid">
            <h1 className="display-4">Modelos</h1>
            <div className="row g-3">
                <div className="input-group col-md">
                    <span className="input-group-text" id="clave">#</span>
                    <input type="text" className="form-control" placeholder="Clave" aria-describedby="Clave" aria-label="Clave del modelo"></input> 
                </div>
                <div className="input-group col-md">
                    <span className="input-group-text" id="Name">Nombre</span>
                    <input type="text" className="form-control" placeholder="Ingresa el nombre" aria-label="Nombre del modelo" aria-describedby="Name"></input>
                </div>
                <div className="input-group col-md">
                    <span className="input-group-text" id="Version">Version</span>
                    <input type="text" className="form-control" placeholder="Ingresa la version" aria-label="Version del modelo" aria-describedby="Version"></input>
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
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Version</th>
                        <th>Genero</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
};

export default Models;
