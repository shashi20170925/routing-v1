import React from 'react';
import {Link } from 'react-router-dom';

export class Item extends React.Component{
  constructor(props) {
    super(props)
  }
  imageBaseUrl = "http://image.tmdb.org/t/p/w185/";

render(){

  return(
        <li>

                   <img src={this.imageBaseUrl + this.props.item.poster_path} alt="Product image description"/>

              <div>
                  <h2>{this.props.item.title}</h2>
                  <p>{this.props.item.overview}</p>
                   {/* <Link to={`/products/${this.props.item.id}`}> */}
                  <Link exact to={`/home/item/${this.props.item.id}`}>Read more &rarr;</Link>

              </div>
          </li>




  );
}
}
