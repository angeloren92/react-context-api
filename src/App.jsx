import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import LayoutDefault from './layout/DefaultLayout'
import BudgetContext from './contexts/BudgetContext'
import { useState, useContext } from 'react'

function App() {

  const [budgetMode, setBudgetMode] = useState(false)
  const [budgetFilter, setBudgetFilter] = useState(0)

  return (
    <BudgetContext.Provider value={{budgetMode, setBudgetMode, budgetFilter, setBudgetFilter}}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
            <Route path='/prodotti' element={<Prodotti />} />
            <Route path='/chi_siamo' element={<ChiSiamo />} />
            <Route path='/prodotti/:id' element={<Prodotto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetContext.Provider>
  )
}

export default App
