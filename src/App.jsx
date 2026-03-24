import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import LayoutDefault from './layout/DefaultLayout'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
