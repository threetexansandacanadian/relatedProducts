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
    $.get('fec.cqmmlgdwsvgu.us-east-2.rds.amazonaws.com/api/products', (data) => {
      this.setState({
        entries: data, 
        mountStatus: true
      });
    });
  }

  render() {
    const noPage = (<div> Nothing here </div>);
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
          Behold!
          <div>
            <span>Go left / Go right</span>
          </div>
          {noPage}
        </div>
      );
    }
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));