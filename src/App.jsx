import { BrowserRouter, Routes, Route, useContext } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import LayoutDefault from './layout/DefaultLayout'
import BudgetContext from './contexts/BudgetContext'
import { useState } from 'react'

function App() {

  const [budgetMode, setBudgetMode] = useState(false)

  return (
    <BudgetContext.Provider value={{budgetMode, setBudgetMode}}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
            <Route path='/Prodotti' element={<Prodotti />} />
            <Route path='/ChiSiamo' element={<ChiSiamo />} />
            <Route path='/Prodotti/:id' element={<Prodotto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetContext.Provider>
  )
}

export default App
