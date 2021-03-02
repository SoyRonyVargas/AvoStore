import styles from './prod.module.css'
import React from 'react'
import { Card, Icon, Image, Rating, Label } from 'semantic-ui-react'
import Link from 'next/link'

interface Props {
  product: TProduct
}

const CardProduct = (props: Props) => {
  const { product } = props
  const { id, name, image, price, sku } = product
  console.log(product)

  // <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
  return (
    <Link key={id} href={`/product/[id]`} as={`/product/${id}`} passHref>
      <Card as="a">
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <Label.Group tag>
              <Label color="teal">${price}</Label>
            </Label.Group>
          </Card.Description>
          <Rating icon="star" defaultRating={3} maxRating={4} />
          <br />
        </Card.Content>
      </Card>
    </Link>
  )
}

export default CardProduct
