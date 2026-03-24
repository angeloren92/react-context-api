import Logo from '../../public/LogoAnazon.png'

function ChiSiamo() {

  return (
    <main className="min-vh-100">
      <div className="container">
        <section className="row py-5">
          <div className="col g-4">
            <div className="card bg-light h-100 shadow">
              <figure className="card-body row">
                <h2 className='text-center mb-4 h1'>安 - Anazon: Tutto ciò che desideri, con il sorriso.</h2>
                <hr />
                <img src={Logo} alt="Logo Anazon" className='img-fluid col-3 my-auto' />
                <p className='col-8 my-auto'>
                  <strong>Chi siamo?</strong> Siamo il tuo nuovo punto di riferimento per lo shopping online. La nostra missione è semplice: portarti i migliori prodotti sul mercato, nel modo più rapido e piacevole possibile. <br /> <br />
                  Il nostro marchio unisce due mondi: l'antica saggezza dell'ideogramma 安, che per noi significa affidabilità e correttezza, e il dinamismo di un sorriso arancione che si trasforma in una freccia. Questa freccia rappresenta il viaggio del tuo desiderio: dal momento in cui lo trovi nel nostro catalogo fino a quando bussa alla tua porta. <br /> <br />
                  Siamo qui per semplificarti la vita. Navigazione facile, assistenza clienti sempre presente e la certezza di fare un ottimo affare in totale sicurezza. Scopri il piacere di fare acquisti senza pensieri su Anazon.
                </p>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ChiSiamo