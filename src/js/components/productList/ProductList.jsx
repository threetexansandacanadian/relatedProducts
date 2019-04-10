import React from 'react';
import ProductEntry from '../productEntry/ProductEntry.jsx';

const ProductList = (props) => {
  return (        
      <div className="ProductList">
        {props.entries.map((product) => {
          return <ProductEntry entry={product} key={product.id}/>
        })}
      </div>
    );
}
export default ProductList;