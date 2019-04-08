import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductList from '../productList/ProductList.jsx';
import $ from 'jquery';

export default class RelatedProducts extends Component {
  constructor(props){
    super(props);

    this.state = {
      entries: ['Howdy', `Yee'Haw`, 'Steak', 'Moose'], // dummy data
      mountStatus: false,
      page: (<div> Nothing here </div>)
    }
  }

  //request data upon mounting
  componentDidMount(){
    $.get('/api/products', (data) => {
      this.setState({
        entries: data, 
        mountStatus: true,
        page: (<ProductList entries={data}/>)
      });

      console.log(this.state);
    });
  }

  render() {

    return (
      <div>
        Behold!
        <div>
          <span>Go left / Go right</span>
        </div>
        {this.state.page}
      </div>
    );
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));