import { useEffect, useState, useContext } from "react"
import AppProdottiCards from '../components/AppProdottiCards'
import BudgetContext from "../contexts/BudgetContext"

const apiUrl = 'https://fakestoreapi.com'


function Prodotti() {
  const [products, setProducts] = useState([])
  const { budgetMode, setBudgetMode } = useContext(BudgetContext)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

function handleBudgetMode() {
  setBudgetMode(true)
  if (budgetMode === true) {
    const tempFilter = productse.filter(element => element.price)
    setFilteredProducts()
  }
}

  return (
    <main className="min-vh-100 py-5">
      <div className="container">
        <div className="d-flex justify-content-end">
          <button className="btn btn-outline-secondary" onClick={handleBudgetMode}><i className="bi bi-funnel"> Modalità Budget</i></button>
        </div>
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
          {
            products.map(element => (
              <AppProdottiCards key={element.id}
                element={element}
              />
            ))
          }
        </section>
      </div >
    </main >
  )
}

export default Prodotti