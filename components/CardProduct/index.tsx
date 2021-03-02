import styles from './prod.module.css'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Link from 'next/link'

interface Props {
  product: TProduct
}

const CardProduct = (props: Props) => {
  const { product } = props
  const { id, name, image, price, sku } = product
  console.log(product)

  return (
    <Link href={`/product/${id}`}>
      <a className={styles.anchor}>
        <Card>
          <Image src={image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>${price}</Card.Description>
          </Card.Content>
        </Card>
      </a>
    </Link>
  )
}

export default CardProduct
