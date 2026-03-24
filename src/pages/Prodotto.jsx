import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


function Prodotto() {

    const [currentProduct, setCurrentProduct] = useState(null)
    const [currentRating, setCurrentRating] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json()
                .then(data => {
                    setCurrentProduct(data)
                    console.log(data)
                    setCurrentRating((data.rating.rate * 100) / 5)
                })
            )
    }, [id])


    if (!currentProduct) {
        return <h2>Caricamento</h2>
    } else {
        return (
            <div className="container">
                <div className="row singleProductSection">
                    <div className="col g-4 h-100">
                        <div className="card bg-secondary-subtle position-relative shadow">
                            <Link to='/Prodotti' className="btn back btn-outline-dark position-absolute rounded-4">INDIETRO</Link>
                            <button className="btn btn-outline-light bg-transparent position-absolute next z-1 border-0" onClick={() => navigate(`/Prodotti/${parseInt(id) + 1}`)}><i className="bi bi-caret-right-fill"></i></button>
                            <button className="btn btn-outline-light bg-transparent position-absolute prev z-1 border-0" onClick={() => navigate(`/Prodotti/${parseInt(id) - 1}`)}><i className="bi bi-caret-left-fill"></i></button>
                            <figure className="card-body mb-0 d-flex flex-wrap align-items-center flex-lg-nowrap bg-light h-100">
                                <div className="productCardImg d-flex justify-content-center mx-auto py-3">
                                    <img src={currentProduct.image} alt={currentProduct.title} className="img-fluid bg-light rounded-3 px-5" />
                                </div>
                                <div className="d-flex flex-column p-3 p-lg-5 productCardInfo">
                                    <h2 className="h5 text-start">{currentProduct.title}</h2>
                                    <small className="mb-4">{currentProduct.category.toUpperCase()}</small>
                                    <p className="description overflow-y-auto">{currentProduct.description}</p>
                                    <div className="d-flex justify-content-between align-items-end flex-wrap h-100">
                                        <div className="text-muted my-4">
                                            <span className="d-flex justify-content-between">{currentProduct.rating.rate.toFixed(1)}
                                                <span className="mx-2 rating" style={{ '--percent': `${currentRating}%` }}>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                            </span>
                                            <span className="">({currentProduct.rating.count} Valutazioni)</span>
                                        </div>
                                        <span className="me-5 mb-5 fs-5">
                                            € {currentProduct.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </figure>
                            <figure className="card-footer">
                                <h3>Prodotti suggeriti:</h3>

                            </figure>
                        </div>
                    </div >
                </div>
            </div>
        )
    }
}

export default Prodotto