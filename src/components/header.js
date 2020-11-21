import React from "react"

const Header = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        className="navbar-brand h1"
        href="/" >
        {props.title}
      </a>
      <div
        className="collapse navbar-collapse">
        <ul
          className="navbar-nav">
          <li
            className="nav-item">
            <a className="nav-link active" href="/">Perfil</a>
          </li>
          <li
            className="nav-item">
            <a className="nav-link active" href="/">Postagens</a>
          </li>
          <li
            className="nav-item">
            <a className="nav-link active" href="/">Categorias</a>
          </li>
          <li
            className="nav-item">
            <a className="nav-link active" href="/">Contato</a>
          </li>
        </ul>
      </div>
  </nav>
)

export default Header