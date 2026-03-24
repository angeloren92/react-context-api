import { useEffect, useState } from "react"
import AppProdottiCards from '../components/AppProdottiCards'
import AppProdottoCard from "./Prodotto"

const apiUrl = 'https://fakestoreapi.com'


function Prodotti() {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({ id: 0 })

  function handleProduct(element) {
    setCurrentProduct(element)
  }

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  return (
    <main className="min-vh-100">
      <div className="container">
        {
          currentProduct.id === 0 && (
            <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 py-5">
              {
                products.map(element => (
                  <AppProdottiCards key={element.id}
                    element={element}
                  />
                ))
              }
            </section>
          )
        }
      </div >
    </main >
  )
}

export default Prodotti