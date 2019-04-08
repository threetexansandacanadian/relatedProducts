import React from 'react';
import ProductEntry from '../productEntry/ProductEntry.jsx';

export default class ProductList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      entries: this.props.entries
    }
 
  }
  componentDidMount(){
  }

  // Now we need to map over the entries to the product entries
  render() {
    return (
      <div>
        {this.state.entries.map((product, id) => {
          // console.log(product);
          return <ProductEntry entry={product} key={id}/>;
          // <p>I've been mapped!</p> 
        })}
      </div>
    )
  }
}