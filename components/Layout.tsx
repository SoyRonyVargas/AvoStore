import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import style from './style.module.css'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    // <div className={style.container}>
    <div className="container">
      <Navbar />
      {children}
      <footer>footer xd</footer>
      <style jsx>
        {`
          .container {
            background: red;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
