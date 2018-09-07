import React from 'React';

class Main extends React.Component{
  render(){
    return(
      <div>
        <h1>This is Main</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
