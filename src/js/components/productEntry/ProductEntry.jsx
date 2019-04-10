import React from 'react';

const ProductEntry = (props) => {
  // const style = {display: 'inline-block'};
  return (
    <div className="ProductEntry-Container">
    <div className="ProductEntry-Image">
      <p>thumbnail</p>
    </div>
      <div className="ProductEntry-Name">{props.entry.productName}</div>
      <div className="ProductEntry-Price">${props.entry.productPrice}</div> 
    </div>
  )
}

export default ProductEntry;