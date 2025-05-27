import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    precio: '',
    cantidad: '',
    descripcion: '',
    imagenUrl: ''
  });

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/productos/${id}`);
        setFormData(res.data);
      } catch (error) {
        console.error('Error al cargar producto', error);
        alert('Error al cargar los datos del producto');
      }
    };

    fetchProducto();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/productos/${id}`, formData);
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar producto', error);
      alert('Hubo un error al actualizar el producto');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Editar Producto LEGO</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <input type="text" className="form-control" name="categoria" value={formData.categoria} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input type="number" className="form-control" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" name="descripcion" value={formData.descripcion} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen (URL)</label>
          <input type="text" className="form-control" name="imagenUrl" value={formData.imagenUrl} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Actualizar</button>
      </form>
    </div>
  );
};

export default EditarProducto;

