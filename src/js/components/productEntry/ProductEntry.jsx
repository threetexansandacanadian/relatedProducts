import React from 'react';

const ProductEntry = (props) => {
    return (
    <div className="ProductEntry-Container" onClick={() => props.handleProductClick(props.entry.id)}>
  
      <div className="ProductEntry-Image">
        <img src={props.entry.productpic} className="ProductEntry-Thumbnail"></img>
      </div>

      <p className="ProductEntry-Name">{props.entry.productname}</p>
      <div className="ProductEntry-Price">${props.entry.productprice}</div> 
    </div>
  )
}

export default ProductEntry;