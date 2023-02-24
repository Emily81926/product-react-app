import { useContext } from "react";
import ProductsContext from "../context/products";

function ProductCard({ title, price, image, id }) {
  const { clickDetail, getClickedId } = useContext(ProductsContext);
  return (
    <div className="column is-4-desktop is-6-tablet">
      <div className="card">
        <div className="card-image px-6 p-3">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-6">{title}</p>
            <p className="subtitle is-6 pt-2">${price}</p>
          </div>
        </div>
        <footer className="card-footer">
          <button
            className="button is-ghost card-footer-item"
            onClick={() => {
              getClickedId(id);
              clickDetail();
            }}
          >
            detail
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ProductCard;
