import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Home/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'
import "./styles/Home.css"

const Home = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [nameFilter, setNameFilter] = useState("")
  const [filterProducts, setFilterProducts] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(0)
  const [isShow, setIsShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameProduct = e.target.nameProduct.value
    setNameFilter(nameProduct)
  }

  const handleClickShow = () => {
    setIsShow(!isShow)
  }

  useEffect(() => {
    axiosEcommerce
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axiosEcommerce
      .get("/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const newProductsByName = products.filter((product) => 
    product.title.toLowerCase().includes(nameFilter.toLowerCase())
    )
    if(categoryFilter){
      const newProductsByCategory = newProductsByName.filter(
        product => product.categoryId === categoryFilter
        )
      setFilterProducts(newProductsByCategory)
    } else {
      setFilterProducts(newProductsByName)
    }
  }, [nameFilter, products, categoryFilter])

  return (
    <main className="home">
      <form className='home__form' onSubmit={handleSubmit}>
        <div className='home__form-search'>
          <input className='home__form-input' id="nameProduct" type="text" placeholder="What are you looking for?" />
          <button className='home__form-btn'>
            <i className="home__form-icon bx bx-search"></i>
          </button>
        </div>
        <div className='home__filterCategory'>
          <div onClick={handleClickShow} className="filter__header">
          <h3 className='home__filterCategory-title'>Categories </h3>
            <i className={`bx bx-chevron-down filter__icon ${isShow ? "show" : ""}`} ></i>
          </div>
          <ul className={`home__categoryList ${isShow ? "show" : ""}`}>
            <li className='categoryList__element' onClick={() => setCategoryFilter(0)} >All</li>
            {categories.map((category) => (
              <li className='categoryList__element'
                onClick={() => setCategoryFilter(category.id)}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </form>
      <section className="home__listProducts">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default Home