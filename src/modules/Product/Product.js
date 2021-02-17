import React from 'react'
import styles from './Product.module.scss'
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'

const Product = (props) => {
  const id = props.location.state.id
  const router = props.router

  return (
    <div className={styles.component}>
      <Header />
      <Item
        id={id}
      />
      <div className={styles.buttonDiv}>
        <button className={styles.button} onClick={() => {router.goBack()}}>Volver</button>
     </div>
    </div>
  )
}

export default Product
