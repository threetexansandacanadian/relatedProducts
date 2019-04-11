import React from 'react';

const ProductEntry = (props) => {
  console.log(props.entry.trunc);
  return (
    <div className="ProductEntry-Container">
  
      <div className="ProductEntry-Image">
        <img src={props.entry.productpic} className="ProductEntry-Thumbnail"></img>
      </div>

      <div className="ProductEntry-Name">{props.entry.productname}</div>
      <div className="ProductEntry-Price">${props.entry.trunc}</div> 
    </div>
  )
}

export default ProductEntry;