import React from 'react';

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(

                <div className="bs-example">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="navbar-brand">Simple Navigation with React Router </div>
                        </div>
                        <div id="navbarCollapse" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="">Home</a></li>
                                <li><a href="">Profile</a></li>
                                  <li><a href="">Admin</a></li>
                            </ul>
                            <form className="navbar-form navbar-left">
                              <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>

    );
  }
}
