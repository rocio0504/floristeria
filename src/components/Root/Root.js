import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from '../../modules/Home/Home'
import Product from '../../modules/Product/Product'

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
      <Route path="/product" component={Product}></Route>
    </Router>
  )
}

export default Root
