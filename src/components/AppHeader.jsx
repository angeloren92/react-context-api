import { NavLink } from "react-router-dom";
import Logo from '../../public/LogoAnazon.png'

function AppHeader() {

  return (
    <header>
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-end gap-5">
          <NavLink className="navbar-brand" to="/"><img src={Logo} alt="Logo Anazon" className="img-fluid m-2 mx-5" /></NavLink>
          <nav className="navbar bg-dark navbar-expand-lg w-75 p-3" data-bs-theme="dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/'>HomePage</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/Prodotti'>Prodotti</NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to='/ChiSiamo'>Chi Siamo</NavLink>
                </li>
              </ul>
              <form className="d-flex mx-5" role="search">
                <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" />
                <button className="btn btn-outline-secondary" type="submit">Cerca</button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default AppHeader