import React, { useEffect, useState } from 'react'
import Layout from '@components/Layout'
import { Header } from 'semantic-ui-react'
import { Container } from 'next/app'

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
        {avos.map((avo) => (
          <p>{JSON.stringify(avo, null, 3)}</p>
        ))}
      </section>
    </Layout>
  )
}

export default HomePage
