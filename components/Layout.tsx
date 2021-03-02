import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import style from './style.module.css'
import { Container } from 'semantic-ui-react'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    // <div className={style.container}>
    <>
      <Navbar />
      <Container text>
        {children}
        <style jsx>
          {`
            .container {
              background: red;
            }
          `}
        </style>
      </Container>
    </>
  )
}

export default Layout
