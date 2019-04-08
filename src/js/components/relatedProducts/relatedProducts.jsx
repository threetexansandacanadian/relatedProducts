import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductList from '../productList/ProductList.jsx';
import $ from 'jquery';

export default class RelatedProducts extends Component {
  constructor(props){
    super(props);

    this.state = {}
  }

  componentDidMount(){
    // Do  get request to the server
    $.get('/', () => { console.log ('there!') })
  }

  render() {
    return (
      <div>
        Behold!
        <ProductList />
      </div>
    );
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));