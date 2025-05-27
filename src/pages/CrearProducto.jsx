import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/productos', {
        nombre,
        descripcion,
        precio,
        imagenUrl,
      });
      navigate('/');
    } catch (error) {
      console.error('Error al crear producto', error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Precio</label>
          <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>URL de Imagen</label>
          <input type="text" className="form-control" value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Crear Producto</button>
      </form>
    </div>
  );
};

export default CrearProducto;
