import PropTypes from 'prop-types';

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  BACK_SPACE: 8,
};

const LOCATIONS = {
  BODY: 'body',
  FOOTER: 'footer',
};

const VARIANTS = {
  HEADER: 'header',
  MENU: 'menu',
};

const itemShape = PropTypes.shape({
  /**
   * The unique key associated with this item.
   */
  key: PropTypes.string.isRequired,
  /**
   * The component associated with this item.
   */
  content: PropTypes.object,
  /**
   *  The location to place the item. One of Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER.
   */
  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating if the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * The text associated with this item.
   */
  title: PropTypes.string,
  /**
   * Array containing the keys of each child of this item.
   */
  childKeys: PropTypes.arrayOf(PropTypes.string),
});

const Utils = {
  KEY_CODES,
  LOCATIONS,
  VARIANTS,
  itemShape,
};

export default Utils;
