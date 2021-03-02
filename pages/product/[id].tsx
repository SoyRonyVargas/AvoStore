import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    const getAvo = async () => {
      const resp = await fetch(`http://localhost:3000/api/avo/${query.id}`)
      const { data } = await resp.json()
      console.log(data)
      setProduct(data)
    }

    getAvo()
  }, [query.id])

  return (
    <Layout>
      <section>
        <h1>Página producto: {query.id}</h1>
      </section>
    </Layout>
  )
}

export default ProductPage
