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

    this.timer = null;
    this.buttonLeftClick = this.buttonLeftClick.bind(this);
    this.buttonRightClick = this.buttonRightClick.bind(this);
    this.buttonEndClick = this.buttonEndClick.bind(this);
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

  buttonLeftClick(){
    document.getElementById("ProductList").scrollLeft -= 150;
    this.timer = setTimeout(this.buttonLeftClick, 200);
  }

  buttonRightClick(){
    document.getElementById("ProductList").scrollLeft += 150;
    this.timer = setTimeout(this.buttonRightClick, 200);
  }

  buttonEndClick(){
    clearTimeout(this.timer);
  }

  render() {
    const noPage = (<div> Loading ...  </div>);
    const productsList = (<ProductList entries={this.state.entries} 
                            handleButtonLeft={this.buttonLeftClick.bind(this)} 
                            handleButtonRight={this.buttonRightClick.bind(this)}
                            handleMouseUp={this.buttonEndClick.bind(this)}/>)
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