import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

function ProductListItem(props, context) {
  return (
    <div style={{marginBottom: '10px'}}>
      <ul>
        <li><FormattedMessage id="productName"/>: {props.name}</li>
        <li><FormattedMessage id="dateAdded"/>: {props.dateAdded}</li>
      </ul>
    </div>
  );
}

ProductListItem.propTypes = {
};

export default ProductListItem;
