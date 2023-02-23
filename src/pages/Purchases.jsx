import React, { useEffect } from 'react'
import { axiosEcommerce } from '../utils/configAxios'

const Purchases = () => {

useEffect(() => {

  const config = {
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userInfo")).token
      }` 
    }
  }

  axiosEcommerce.get("/purchases", config)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
}, [])

  return (
    <main>
      <section>
        <section>
          <h3>My purchases</h3>
          <section>

            <article>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <h4>Samsung</h4>
                </div>
              <div>
                <h4>2/22/2023</h4>
              </div>
            </article>

          </section>
        </section>
      </section>
    </main>
  )
}

export default Purchases