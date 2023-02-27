import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'
import "./styles/Home.css"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axiosEcommerce
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className='home'>
      <section className='home__listProducts'>
        {products.map(product => (
          <ProductCard  key={product.id}  product={product}/>
        ))}
      </section>
    </main>
  )
}

export default Home