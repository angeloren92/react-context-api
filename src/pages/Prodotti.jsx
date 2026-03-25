import { useEffect, useState, useContext } from "react"
import AppProdottiCards from '../components/AppProdottiCards'
import { BudgetContext } from "../contexts/BudgetContext"

const apiUrl = 'https://fakestoreapi.com'


function Prodotti() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const { budgetMode, setBudgetMode, budgetFilter, setBudgetFilter } = useContext(BudgetContext)

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
      })
  }, [])

  useEffect(() => {
    if (budgetMode === true) {
      const tempFilter = products.filter(element => element.price <= 30)
      setFilteredProducts(tempFilter)
    } else {
      setFilteredProducts(products)
    }
  }, [budgetMode])

  function handleSubmit(e) {
    e.preventDefault()
    if (budgetFilter !== '') {
      setFilteredProducts([...products.filter(element => element.price <= parseInt(budgetFilter))])
    } else {
      setFilteredProducts(products)
    }
  }

  return (
    <main className="min-vh-100 py-5">
      <div className="container">
        <div className="d-flex justify-content-end gap-3">
          <form className="d-flex " onSubmit={handleSubmit}>
            <input type="number" placeholder="Inserisci Budget Max" id="budgetFilter" className="btn btn-outline-secondary shadow-none bg-light text-black" value={budgetFilter} onChange={(e) => setBudgetFilter(e.target.value)} />
            <button className="btn btn-secondary rounded-0">VAI</button>
          </form>
          <button type="submit" className={`btn btn${budgetMode === false ? '-outline' : ''}-secondary`} onClick={() => setBudgetMode(!budgetMode)} disabled={budgetFilter !== ''}><i className="bi bi-funnel-fill"> Modalità Budget {budgetMode === false ? 'Attiva' : 'Disattiva'}</i></button>
        </div>
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
          {
            filteredProducts.map(element => (
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