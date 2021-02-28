import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Confidentiality from '../views/Confidentiality'
import Offer from '../views/Offer'
import Politics from '../views/Politics'

function Router(props) {
  return (
    <Switch>

      <Route path="/confidentiality" component={Confidentiality}/>

      <Route path="/offer" component={Offer}/>

      <Route path="/politics" component={Politics}/>

      <Route path='/' component={Home}/>

    </Switch>
  )
}

export default Router