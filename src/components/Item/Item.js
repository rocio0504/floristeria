import React, { useState, useEffect } from 'react'
import styles from './Item.module.scss'
import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const Item = (props) => {
  const { id } = props
  const [product, setProduct] = useState()

  const getProduct = async () => {
    return await fetch(`https://dulces-petalos.herokuapp.com/api/product/${id}`)
      .then(response => response.json())
      .then(data => {
         setProduct(data)
     })
   }

  useEffect(() => {
    getProduct()
  }, [])

  if (!product) {
    return (
      <CircularProgress className={styles.progress}/>
    )
  }

  return (
    <div className={styles.component}>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <img className={styles.image} src={product.imgUrl} alt='img'/>
          <div>
            <div className={styles.description}>
                <p className={styles.name}>{product.name}</p>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.textTitle}>Nombre científico: </p>
                  <p className={styles.text}>{product.binomialName}</p>
                </div>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.textTitle}>Riego por semana: </p>
                  <p className={styles.text}>{product.wateringsPerWeek}</p>
                </div>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.textTitle}>Tipo de fertilizante: </p>
                  <p className={styles.text}>{product.fertilizerType}</p>
                </div>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.textTitle}>Altura: </p>
                  <p className={styles.text}>{product.heightInCm}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
