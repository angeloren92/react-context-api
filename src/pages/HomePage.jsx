import imgProducts from '../../public/Img_products.png'
import imgChiSiamo from '../../public/Img_ChiSiamo.png'
import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <main className="min-vh-100">
      <div className="container">
        <section className="row row-cols-1 row-cols-md-2 py-5 g-5">
          <div className="col">
            <div className="card bg-light h-100 shadow">
              <figure className="card-body text-center d-flex flex-column justify-content-between align-items-center">
                <Link to="/Prodotti"><img src={imgProducts} alt="Img Products" className='img-fluid rounded-3' /></Link>
                <h2 className='h3 my-3'>PRODOTTI AN&SORRISO</h2>
                <p className='fs-5'>Scopri la nostra selezione curata, pensata per la tua pace e soddisfazione, dalla A alla Z.</p>
                <Link to="/Prodotti" className='btn w-75 btn-warning rounded-5'>ESPLORA I PRODOTTI</Link>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card bg-light h-100 shadow">
              <figure className="card-body text-center d-flex flex-column justify-content-between align-items-center">
                <Link to="/ChiSiamo"><img src={imgChiSiamo} alt="Img Products" className='img-fluid rounded-3' /></Link>
                <h2 className='h3 my-3'>CHI SIAMO & LA FILOSOFIA</h2>
                <p className='fs-5'>Scopri la nostra storia. Uniamo l'antica pace (安) con la gioia affidabile d'acquisto. Ti garantiamo serenità.</p>
                <Link to="/ChiSiamo" className='btn w-75 btn-warning rounded-5'>LA NOSTRA STORIA</Link>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomePage