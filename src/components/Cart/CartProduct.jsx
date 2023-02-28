import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProductCart, updateProductCart } from '../../store/slices/cart.slice';
import "./styles/CartProduct.css"

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const handleDeleteCartProduct = () => {
    dispatch(deleteProductCart(product.id))
  }

  const handleClickPlus = () => {
    const newQuantity = product.quantity + 1
    const data = {
      quantity: newQuantity
    }
    dispatch(updateProductCart(product.id, data))
  }

  const handleClickLess = () => {
    const newQuantity = product.quantity - 1
    if(newQuantity <= 0) {
      dispatch(deleteProductCart(product.id))
    }else{
      const data = {
        quantity: newQuantity
      }
      dispatch(updateProductCart(product.id, data))
    }
  }

  return (
    <article className="cartProduct">
      <div className="cartProduct__img">
        <img src={product.product.images[0].url} alt="" />
      </div>
      <section className="cartProduct__info">
        <h3 className="cartProduct__title">{product.product.title}</h3>

        <div className="cartProduct__quantityContainer">
          <div className="cartProduct__quantity">
            <button onClick={handleClickLess}><i className='bx bx-minus' ></i></button>
            <h3 className="quantity-value">{product.quantity}</h3>
            <button onClick={handleClickPlus}><i className='bx bx-plus'></i></button>
            
          </div>
          <i onClick={handleDeleteCartProduct} className="cartProduct__delete bx bx-trash"></i>
        </div>
      </section>

      <section className="cartProduct__total">
        <h3 className="cartProduct__total-title">Total:</h3>
        <h3 className="cartProduct__total-value">
          $ {product.quantity * product.product.price}
        </h3>
      </section>
    </article>
  );
}

export default CartProduct