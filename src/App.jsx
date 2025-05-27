import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListarProductos from './pages/ListarProductos';
import CrearProducto from './pages/CrearProducto';
import EditarProducto from './pages/EditarProducto';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListarProductos />} />
          <Route path="/crear" element={<CrearProducto />} />
          <Route path="/editar/:id" element={<EditarProducto />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
