import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import LayoutDefault from './layout/DefaultLayout'
import { BudgetProvider } from './contexts/BudgetContext'

function App() {

  return (
    <BudgetProvider>
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
    </BudgetProvider>
  )
}

export default App
