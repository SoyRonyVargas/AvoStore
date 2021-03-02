import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import { Header } from 'semantic-ui-react'
import ListOfProducts from '@components/ListProducts/index'

const HomePage = () => {
  const [avos, setAvos] = useState<TProduct[]>([])

  useEffect(() => {
    const getAvos = async () => {
      const _avos = await fetch('http://localhost:3000/api/avo')
      const allAvos = await _avos.json()
      console.log(allAvos)
      setAvos(allAvos.data)
    }

    getAvos()
  }, [])

  return (
    <Layout>
      <section style={{ margin: '2rem 0' }}>
        <Header textAlign="center" size="huge" as="h1">
          StoreAvo!
        </Header>
        <ListOfProducts allproducts={avos} />
      </section>
    </Layout>
  )
}

export default HomePage
