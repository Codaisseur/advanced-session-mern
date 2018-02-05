import React, { PropTypes } from 'react';

function ModelTranslation({ defaultMessage, translations = [] }, { intl }) {
  const messagePair = translations.find((t) => t.language == intl.locale)
  return <span>{messagePair ? messagePair.message : defaultMessage}</span>;
}

ModelTranslation.contextTypes = { intl: PropTypes.object }

ModelTranslation.propTypes = {
  defaultMessage: PropTypes.string.isRequired,
  translations: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })),
};

export default ModelTranslation;
