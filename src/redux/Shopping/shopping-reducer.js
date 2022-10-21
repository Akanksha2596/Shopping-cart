import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Massala Theory",
      description:
        "a grain: rice or flatbread made with wheat, millet, etc. lentils: dal or sambar. vegetables: a seasonal preparation. chutney: a condiment made with fruit, herbs, spices, and even vegetables",
      price: 150,
      image:
        "https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp",
    },
    {
      id: 2,
      title: "Large Coffee Cup",
      description:
        "A beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant, Get a big cup of coffee every morning before the day starts",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "La Milano Pizzeria",
      description:
        "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients",
      price: 350,
      image:
        "https://b.zmtcdn.com/data/pictures/chains/1/19708611/10f90d4a69678d98662514d173b29665_o2_featured_v2.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
