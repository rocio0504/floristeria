import React from 'react'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'

const Home = (props) => {
  return (
    <div className={styles.component}>
      <Header />
      <Container />
    </div>
  )
}

export default Home
