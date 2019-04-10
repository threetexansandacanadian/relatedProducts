import React from 'react';
import ProductEntry from '../productEntry/ProductEntry.jsx';

const ProductList = (props) => {
  console.log(props)
  return (        
    <div>
      {props.entries.map((product) => {
        console.log(product);
        return <ProductEntry entry={product} key={product.id}/>
        // <p>I've been mapped!</p> 
      })}
    </div>
    );
}
export default ProductList;

// export default class ProductList extends React.Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       entries: this.props.entries,
//       mountStatus: false,
//       page: (<div> Waiting for component to mount ...</div> )
//     }
 
//   }
//   componentDidMount(){
//     this.setState({
//       entries: this.props.entries,
//       mountStatus: true,
//       page: 
// ,
//     })
//   }

//   // Now we need to map over the entries to the product entries
//   render() {
//     return (
//       <div>
//         {this.state.page}
//       </div>
//     );
//   }
// }