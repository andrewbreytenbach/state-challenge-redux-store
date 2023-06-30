const initialState = {
    items: [],
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    // Handle state transitions based on action types
    switch (action.type) {
      case 'ADD_TO_CART':
        // Update state when adding an item to the cart
        // Return the updated state
      case 'REMOVE_FROM_CART':
        // Update state when removing an item from the cart
        // Return the updated state
      default:
        return state;
    }
  };
  
  export default cartReducer;
  