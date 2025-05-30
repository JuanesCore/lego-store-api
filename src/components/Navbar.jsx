import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e3000b' }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">LEGO Tienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/crear">Crear Producto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
