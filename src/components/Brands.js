import React, { useEffect} from "react";
import '../styles/brands.css';

const Brands = () => {
    //const [brands, setbrands] = useState([]);

    useEffect(() => {
        
    }, []);

    return(
        
        <div className="brands container-fluid">
            <h1 className="display-4">Marcas</h1>
            <div className="row g-3">
                <div className="input-group col-md">
                    <span className="input-group-text" id="clave">#</span>
                    <input type="text" className="form-control" placeholder="Clave" aria-label="Clave de la marca" aria-describedby="Clave"></input>
                </div>
                <div className="input-group col-md">
                    <span className="input-group-text" id="Name">Nombre</span>
                    <input type="text" className="form-control" placeholder="Ingrese el Nombre a buscar" aria-label="Nombre de la marca" aria-describedby="Name"></input>
                </div>
                <div className="input-group col-md">
                    <button type="button" className="btn btn-primary">Buscar</button>
                </div>
            </div>
            <br></br>
            <table className="table table-dark"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
            </table>
            
            
        </div>
    );
};

export default Brands;