import React, { PropTypes } from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import ModelTranslation from '../../../../components/ModelTranslation'

function ProductListItem(props, context) {
  return (
    <div style={{marginBottom: '10px'}}>
      <ul>
        <li><FormattedMessage id="productName"/>: <ModelTranslation {...props.name}/></li>
        <li><FormattedMessage id="dateAdded"/>: <FormattedDate value={props.dateAdded}/></li>
      </ul>
    </div>
  );
}

ProductListItem.propTypes = {
};

export default ProductListItem;
