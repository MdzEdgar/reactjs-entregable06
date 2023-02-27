import React from 'react'

const CartProduct = ({product}) => {
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
        <h3>Total</h3>
        <h3>$ {product.quantity * product.product.price}</h3>
      </section>
    </article>
  );
}

export default CartProduct