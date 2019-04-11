import React from 'react';

const ProductEntry = (props) => {
  return (
    <div className="ProductEntry-Container">
  
      <div className="ProductEntry-Image">
        <img src={props.entry.productpic} className="ProductEntry-Thumbnail"></img>
      </div>

      <div className="ProductEntry-Name" attribute="highlight">{props.entry.productname}</div>
      <div className="ProductEntry-Price">${props.entry.productprice}</div> 
    </div>
  )
}

export default ProductEntry;