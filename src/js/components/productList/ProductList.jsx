import React from 'react';
import ProductEntry from '../productEntry/ProductEntry.jsx';

const ProductList = (props) => {
  return (        
    <div className="RelatedProducts">
      <div className="ButtonLeft">
        Button Left
      </div>

      <div className="ProductList">
        {props.entries.map((product) => {
          return <ProductEntry entry={product} key={product.id}/>
        })}
      </div>
      
      <div className="ButtonRight">
        Button Right
      </div>

    </div>
    );
}
export default ProductList;