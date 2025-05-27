import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListarProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/productos');
        setProductos(res.data);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };
    fetchProductos();
  }, []);

  const eliminarProducto = async (id) => {
    if (confirm('¿Eliminar este producto?')) {
      await axios.delete(`http://localhost:5000/api/productos/${id}`);
      setProductos(productos.filter((p) => p._id !== id));
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Catálogo LEGO</h2>
      <div className="row">
        {productos.map((prod) => (
          <div key={prod._id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow card-hover">
              <img
                src={prod.imagenUrl || "https://via.placeholder.com/300x200.png?text=Sin+imagen"}
                alt={prod.nombre}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descripcion}</p>
                <p className="card-text fw-bold text-danger">${prod.precio}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <Link to="/crear" className="btn btn-success mb-3">Crear nuevo producto</Link>
                <Link to={`/editar/${prod._id}`} className="btn btn-warning btn-sm">Editar</Link>
                <button onClick={() => eliminarProducto(prod._id)} className="btn btn-danger btn-sm">Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListarProductos;
