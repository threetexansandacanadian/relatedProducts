import React from 'react';
import ProductEntry from '../productEntry/ProductEntry.jsx';

const ProductList = (props) => {
  return (        
    <div className="RelatedProducts">
      <button className="ButtonLeft" 
      onMouseDown={() => props.handleButtonLeft()} 
      onMouseLeave={() => props.handleMouseUp()}
      onMouseUp={() => props.handleMouseUp()}
      >
        &lt;
      </button>

      <div id="ProductList">
        {props.entries.map((product) => {
          return <ProductEntry entry={product} key={product.id} handleProductClick={props.handleProductClick}/>
        })}
      </div>
      
      <button className="ButtonRight" 
      onMouseDown={() => props.handleButtonRight()}
      onMouseLeave={() => props.handleMouseUp()}
      onMouseUp={() => props.handleMouseUp()}>
        &gt;
      </button>

    </div>
    );
}
export default ProductList;