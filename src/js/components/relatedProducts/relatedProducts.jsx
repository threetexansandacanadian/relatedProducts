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
    $.get('/api/products', (data) => { 
      //Cool I got the goods now, I only need the first 10 or 15 to save to state

      this.state.entries = data;

      console.log(this.state);
    });
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