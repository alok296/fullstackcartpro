import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from "../redux/action/cartAction";
export default function OrderHistory() {
    const selectitem = useSelector(sate=>state.cart)
  return (
    <div>OrderHistory</div>
  )
}
