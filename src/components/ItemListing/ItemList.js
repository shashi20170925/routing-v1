import React from 'react';
 import {Item} from '../ItemListing/Item'

export class ItemList extends React.Component{
  constructor(props) {
    super(props);
  }
render(){
           return(
         <div>
           <h1>ItemList component</h1>

           <div className="article-list-basic">
             {this.props.displayItems.map((result, key)=> {return <Item item={result} key={key} /> })}
             </div>
         </div>
           );
}
}
