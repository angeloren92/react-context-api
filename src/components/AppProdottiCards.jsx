import { Link } from "react-router-dom"

function AppProdottiCards({ element }) {

return (
    <div className="col g-4">
        <Link to={`/Prodotti/${element.id}`} className="card bg-secondary-subtle h-100 main-card shadow">
            <figure className="card-body d-flex flex-column justify-content-between align-items-center">
                <div className="position-relative">
                    <img src={element.image} alt={element.title} className="img-fluid border bg-light rounded-3 p-5" />
                    <figcaption className="rate position-absolute translate-middle text-muted"><strong>{element.rating.rate.toFixed(1)}</strong>  ({element.rating.count} Valutazioni)</figcaption>
                </div>
                <h2 className="h5 text-start w-100 h-100 my-3">{element.title}</h2>
                <div className="d-flex justify-content-between w-100">
                    <span className="text-muted">
                        {element.category.toUpperCase()}
                    </span>
                    <span className="px-3 fs-5">
                        € {element.price.toFixed(2)}
                    </span>
                </div>
            </figure>
        </Link>
    </div>
)
}

export default AppProdottiCards