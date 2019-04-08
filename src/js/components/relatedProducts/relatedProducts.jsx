import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RelatedProducts extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }


  render() {
    return (
      <div>
        Behold!
      </div>
    );
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));