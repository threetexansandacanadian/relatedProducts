import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductList from '../productList/ProductList.jsx';
// import ItemCarousel from '../itemCarousel/ItemCarousel.jsx';
import $ from 'jquery';

export default class RelatedProducts extends Component {
  constructor(props){
    super(props);

    this.state = {
      entries: ['Howdy', `Yee'Haw`, 'Steak', 'Moose'], // dummy data
      mountStatus: false,
    }
  }

  //request data upon mounting
  componentDidMount(){
    $.get('http://ec2-18-219-207-105.us-east-2.compute.amazonaws.com/api/products', (data) => {
      this.setState({
        entries: data, 
        mountStatus: true
      });
    });
  }

  render() {
    const noPage = (<div> Loading ...  </div>);
    const productsList = (<ProductList entries={this.state.entries}/>)
    if (this.state.mountStatus === true){
      return (
        <div>
          {productsList}
        </div>
      );
    } else {
      return (
        <div>
          {noPage}
        </div>
      );
    }
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));