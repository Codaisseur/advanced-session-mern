import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from "../../components/ProductListItem/ProductListItem";

import { fetchProducts } from '../../ShopActions';

class ProductsPage extends Component {
  componentDidMount() {
    if (!this.props.initialLoadComplete) {
      this.props.dispatch(fetchProducts());
    }
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        {this.props.products.map((p) => (<ProductListItem key={p._id} {...p} />))}
      </div>
    );
  }
}

ProductsPage.need = [() => { return fetchProducts() }]

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    ...state.shop
  };
}

export default connect(mapStateToProps)(ProductsPage);
