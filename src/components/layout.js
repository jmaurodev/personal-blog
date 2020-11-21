import React from "react"
import Header from "./header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = Header({title})

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <p>
          Template
          {` `}
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>
        </p>
        <p>
          © {new Date().getFullYear()}, Construído com
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
