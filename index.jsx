import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {
  constructor(props){
  	super(props)
  } 

  render(){
  	return (
  		<div>hello</div>
  		)
  }
}

ReactDOM.render(<Board/>, document.getElementById('app'))