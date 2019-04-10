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
    }
  }

  //request data upon mounting
  componentDidMount(){
    $.get('/api/products', (data) => {
      const entryVar = data;

      this.setState({
        entries: entryVar, 
        mountStatus: true
      });

      // console.log(this.state);
    });
  }

  render() {
    const noPage = (<div> Nothing here </div>);
    const productsList = (<ProductList entries={this.state.entries}/>)
    if (this.state.mountStatus === true){
      return (
        <div>
          {productsList}
          <p>Uh??</p>
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
        )
      }
  }
}

ReactDOM.render(<RelatedProducts/> , document.getElementById('relatedProducts'));