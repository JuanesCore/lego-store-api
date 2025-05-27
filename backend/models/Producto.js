import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  imagenUrl: String
});

export const Producto = mongoose.model('Producto', productoSchema);
