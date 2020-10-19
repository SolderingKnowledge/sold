import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/items/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      itemId: data._id,
      name: data.name,
      img: data.img,
      price: data.price,
      inStock: data.inStock,
      qty,
    },
  })
  //                                             getState() is to get currentState after dispatch();
  localStorage.setItem('cartItems', JSON.stringify(getState().cartState.cartItems));

}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cartState.cartItems))
}

// export const saveShippingAddress = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_SHIPPING_ADDRESS,
//     payload: data,
//   })

//   localStorage.setItem('shippingAddress', JSON.stringify(data))
// }

// export const savePaymentMethod = (data) => (dispatch) => {
//   dispatch({
//     type: CART_SAVE_PAYMENT_METHOD,
//     payload: data,
//   })

//   localStorage.setItem('paymentMethod', JSON.stringify(data))
// }