const Storage = (cartItem) => {
  localStorage.setItem(
    'cart',
    JSON.stringify(cartItem.length > 0 ? cartItem : [])
  );
};

export const CartReducer = (state, action) => {
  // debugger;

  let index = -1;

  if (action.payload) {
    index = state.cartItem.findIndex((x) => x.id === action.payload.id);
  }

  let newItems = [...state.cartItem];

  switch (action.type) {
    case 'ADD':
    case 'INCQTY':
      if (index === -1) {
        newItems.push({ ...action.payload, quantity: 1 });
      } else {
        newItems[index].quantity++;
      }
      break;

    case 'REMOVE':
      if (index > -1) {
        newItems = state.cartItem.filter((x) => x.id !== action.payload.id);
      }
      break;

    case 'DECQTY':
      if (index > -1) {
        if (newItems[index].quantity > 1) newItems[index].quantity--;
      }
      break;

    case 'CLEAR':
      newItems = [];
      break;

    default:
      return state;
  }

  state.cartItem = newItems;
  Storage(newItems);

  return state;
};
