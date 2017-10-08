import React from 'react';

export class Item extends React.Component{
  constructor(props) {
    super(props)
  }
  imageBaseUrl = "http://image.tmdb.org/t/p/w185/";

render(){
  {console.log(" in the item " , this.props)}

  return(
        <li>
              <a href="#">

                   <img src={this.imageBaseUrl + this.props.item.poster_path} alt="Product image description"/>
              </a>
              <div>
                  <h2><a href="#">{this.props.item.title}</a></h2>
                  <p>{this.props.item.overview}</p>
                  <a href="#" className="read-more">Read more &rarr;</a>
              </div>
          </li>




  );
}
}
