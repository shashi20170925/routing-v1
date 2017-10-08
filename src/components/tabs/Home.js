import React from 'react';
import {ItemList} from '../ItemListing/ItemList'
import {Item} from '../ItemListing/Item'

import {BrowserRouter as Router, Route, NavLink,Switch,Redirect } from 'react-router-dom';
import { searchMovies_v3, getPopularMovies_v3, getPopularTV_v3 } from '../../../src/API/ApIUtil'


export class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        responseData: {},
        loading: true

    };
  }

     getPopularMovies_v3= ()=> {
      console.log("in the listing ");

        getPopularMovies_v3().then((response) => {
  console.log("in the promise ",response);
            this.setState({
                loading: false,
                responseData: response.data,
            });
        });
    }
    componentWillMount() {
           this.getPopularMovies_v3();
  console.log("in the listing mount ", this.getPopularMovies_v3());
      }

render(){
  if (this.state.loading === true) {
           return <div> Loading ...</div>
       }
       else {
         return(
           <div>
           <h1>Home component</h1>
       <Switch>
           <Route path="/home/itemlist"
           render={(props) => (<ItemList displayItems={this.state.responseData.results}  />) }

           />
           <Route path="/home/item/:id" render={(props) =>{console.log("in the ind component", props.match.params.id); return  (  <Item item={this.state.responseData.results.filter((result)=>{ console.log("in the filter", result);if(result.id==props.match.params.id) {return result}})[0]} key={1}  />) }} />
       </Switch>
       {/* <Route path="/products/:id" component={App} /> */}

           </div>

         );
       }

}
}
