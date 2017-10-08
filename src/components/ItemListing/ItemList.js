import React from 'react';
 import {Item} from '../ItemListing/Item'
 import { searchMovies_v3, getPopularMovies_v3, getPopularTV_v3 } from '../../../src/API/ApIUtil'

export class ItemList extends React.Component{
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
//  const popMovi = getPopularMovies_v3();
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
           <h1>ItemList component</h1>

           <div className="article-list-basic">
             {this.state.responseData.results.map((result, key)=> {return <Item item={result} key={key} /> })}
         {/* <Item />
         <Item />
         <Item />
         <Item />
         <Item /> */}
             </div>




         </div>

           );
         }


}
}
