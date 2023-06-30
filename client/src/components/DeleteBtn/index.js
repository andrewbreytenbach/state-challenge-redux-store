import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../../utils/actions';

function DeleteBtn({ removeFromCart, ...props }) {
  const handleClick = () => {
    removeFromCart(props.item);
  };

  return (
    <span onClick={handleClick} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default connect(null, { removeFromCart })(DeleteBtn);
