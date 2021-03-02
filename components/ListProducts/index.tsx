import CardProduct from '@components/CardProduct'
import React from 'react'
import { Card } from 'semantic-ui-react'

interface Props {
  allproducts: TProduct[]
}
const ListOfProducts = (props: Props) => {
  console.log(props)

  return (
    <Card.Group itemsPerRow={2}>
      {props.allproducts.map((product) => (
        <CardProduct product={product} key={product.id} />
      ))}
    </Card.Group>
  )
}

export default ListOfProducts
