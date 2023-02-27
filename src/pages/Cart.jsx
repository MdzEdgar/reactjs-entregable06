import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/Cart/CartProduct'
import { getAllCartProducts } from '../store/slices/cart.slice'

const Cart = () => {
  const {products} = useSelector(store => store.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCartProducts())
  }, [])

  return (
    <main>
      <section>
        {products.map((product) => <CartProduct key={product.id} product={product} />)
        }
        
      </section>
    </main>
  )
}

export default Cart