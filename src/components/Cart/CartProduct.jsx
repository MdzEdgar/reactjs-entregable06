import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProductCart } from '../../store/slices/cart.slice';

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const handleDeleteCartProduct = () => {
    dispatch(deleteProductCart(product.id))
  }

  return (
    <article>
      <div>
        <img src={product.product.images[0].url} alt="" />
      </div>
      <section>
        <h3>{product.product.title}</h3>

        <div>
          <button>-</button>
          <h3>{product.quantity}</h3>
          <button>+</button>
        </div>
      </section>
      <section>
        <i onClick={handleDeleteCartProduct} className="bx bx-trash"></i>
        <h3>Total</h3>
        <h3>$ {product.quantity * product.product.price}</h3>
      </section>
    </article>
  );
}

export default CartProduct