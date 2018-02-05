import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductListItem from "../../components/ProductListItem/ProductListItem";

export function ProductsPage(props) {
  return (
    <div>
      <h1>Products</h1>
      <ProductListItem />
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
  };
}

export default connect(mapStateToProps)(ProductsPage);
