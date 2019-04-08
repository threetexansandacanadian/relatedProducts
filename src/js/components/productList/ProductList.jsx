import React from 'react';
import ProductEntries from '../productEntries/ProductEntries.jsx';

export default class ProductList extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
 
  }

  render() {
    return (
    <div>
      <div>I am a list</div>
      <ProductEntries />
    </div>
    );
  }
}