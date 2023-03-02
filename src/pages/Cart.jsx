import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'
import "./styles/Cart.css"

const Cart = () => {
  const {products} = useSelector(store => store.cart)

  const dispatch = useDispatch()

  const totalPriceCart = products.reduce(
    (total, product) => total + product.quantity * product.product.price,
    0
  );

  const handlePurchaseCart = () => {
    dispatch(purchaseCart())
  }

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])

  return (
    <main className='cart'>
      <h4 className='cart__title'>Cart</h4>
      <section className='cart__products'>
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
        <section className='cart__separator'>
          <hr />
        </section>
        <div className='cart__checkoutContainer'>
          <h3 className='cart__checkout-total'>Total</h3>
          <h3 className='cart__checkout-totalValue'>$ {totalPriceCart}</h3>
        </div>
        <button className='cart__checkout-btn' onClick={handlePurchaseCart} >Checkout</button>
      </section>

    </main>
  )
}

export default Cart