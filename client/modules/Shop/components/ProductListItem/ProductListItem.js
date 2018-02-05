import React, { PropTypes } from 'react';

function ProductListItem(props, context) {
  return (
    <div style={{marginBottom: '10px'}}>
      <ul>
        <li>Name: {props.name}</li>
        <li>Date added: {props.dateAdded}</li>
      </ul>
    </div>
  );
}

ProductListItem.propTypes = {
};

export default ProductListItem;
