import * as actionTypes from "../constant/cartConstant";
export const addcartitem = (state = { addcartItems: [] }, action) => {
   switch (action.type) {
    case actionTypes.ADD_CART_ITEM:
      const cartitem = action.payload;
      const existingItem = state.addcartItems.find(
        (x) => x.product === cartitem.product
      );
      if (existingItem) {
        return {
          ...state,
          addcartItems: state.addcartItems.map((x) =>
            x.product === existingItem.product ? cartitem : x
          ),
        };
      } else {
        return {
          ...state,
          addcartItems: [...state.addcartItems, cartitem],
        };
      }
      case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        addcartitem: state.addcartItems.filter((x) => x.product !== action.payload),
      };
      default:
          return state;
    }
}
