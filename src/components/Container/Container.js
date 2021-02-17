import React, { useState, useEffect } from 'react'
import styles from './Container.module.scss'
import { Grid } from '@material-ui/core'
import { withRouter, browserHistory } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'

const Container = (props) => {
  const [products, setProducts] = useState()
  const [input, setInput] = useState('')
  const [productListDefault, setProductListDefault] = useState()

  const getProducts = async () => {
    return await fetch('https://dulces-petalos.herokuapp.com/api/product')
      .then(response => response.json())
      .then(data => {
         setProducts(data)
         setProductListDefault(data)
     })
   }

  useEffect(() => {
    getProducts()
  }, [])

  const handleOnClick = (id) => {
    browserHistory.push({pathname: '/product', state: {'id': id}})
  }

  const updateInput = async (e) => {
    const input = e.target.value
     const filtered = productListDefault.filter(p => {
       return p.name.toLowerCase().includes(input.toString().toLowerCase()) || p.binomialName.toLowerCase().includes(input.toString().toLowerCase())
     })
     setInput(input)
     setProducts(filtered)
     if (input.length == 0 ) { setProducts(productListDefault) }
  }

  if (!products) {
    return (
      <CircularProgress className={styles.progress}/>
    )
  }

  return (
    <div className={styles.component}>
      <div>
        <input type="text" placeholder="Search.." className={styles.searchBar} input={input} onChange={updateInput}/>
      </div>
      <Grid container spacing={2} className={styles.content}>
        {products.map((p, index) => {
          return (
            <Grid
              item
              key={index}
              sm={3}
              xs={6}
            >
              <div className={styles.item} onClick={() => handleOnClick(p.id)}>
                <div>
                  <img className={styles.image} src={p.imgUrl} alt='logo'/>
                </div>
                <div className={styles.divContent}>
                  <p className={styles.name}>{p.name}</p>
                  <p className={styles.binomialName}>{p.binomialName}</p>
                  <p className={styles.price}>{p.price}€</p>
                </div>
              </div>
            </Grid>
            )
        })
        }
      </Grid>
    </div>
  )
}

export default withRouter(Container)
