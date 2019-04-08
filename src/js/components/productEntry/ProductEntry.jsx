import React from 'react';

const ProductEntry = (props) => {
  console.log(props);
  //returns html which will render
  return (
    <div>
      <div>{props.entry.productname}</div>
    </div>
  )
}

export default ProductEntry;