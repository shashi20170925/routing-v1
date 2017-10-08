import React from 'react';

export class RouteNotFound extends React.Component{
  constructor(props) {
    super(props)
  }
render(){
  return(
    <div>
  <h1>I tried my best to get you into a Route, however no route is matching for path you entered. Try different path. Route Not Found with component </h1>
    </div>

  );
}
}
