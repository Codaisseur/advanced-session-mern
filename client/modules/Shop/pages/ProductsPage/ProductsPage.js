import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from "../../components/ProductListItem/ProductListItem";

import { fetchProducts } from '../../ShopActions';

class ProductsPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        {this.props.products.map((p)=>(<ProductListItem key={p._id} {...p}/>))}
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    products: state.shop.products,
  };
}

export default connect(mapStateToProps)(ProductsPage);
