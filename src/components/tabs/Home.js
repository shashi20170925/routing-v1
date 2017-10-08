import React from 'react';
import {ItemList} from '../ItemListing/ItemList'
import {Item} from '../ItemListing/Item'

import {BrowserRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom';


export class Home extends React.Component{
  constructor(props) {
    super(props)
  }
render(){
  return(
    <div>
    <h1>Home component</h1>
<Switch>
    <Route path="/home/itemlist" component={ItemList} />
    <Route path="/home/item/:id" component={Item} />
</Switch>
{/* <Route path="/products/:id" component={App} /> */}

    </div>

  );
}
}
