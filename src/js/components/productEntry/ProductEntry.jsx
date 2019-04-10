import React from 'react';

const ProductEntry = (props) => {
  console.log(props);
  //returns html which will render
  // console.log('uh??')
  return (
    <div>
      <div>{props.entry.productName}</div>
    </div>
  )
}

export default ProductEntry;