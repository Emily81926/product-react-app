import { useContext } from "react";
import ProductsContext from "../context/products";
import ReactStars from "react-rating-stars-component";

function ProductModal() {
  const { closeModal, products, getId, getModalInfo } =
    useContext(ProductsContext);

  const { title, image, price, description, category, rate, count } =
    getModalInfo(products, getId);

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="card column is-one-third">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
          <button
            onClick={closeModal}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <div className="card-image px-6 p-4 column is-two-thirds container is-centered">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div>
              <p className="category is-size-7 has-text-weight-bold">
                {category}
              </p>
              <div className="ratings is-flex pt-2">
                <div className="rating-star is-flex-direction-column">
                  <ReactStars
                    size={15}
                    count={5}
                    value={rate}
                    edit={false}
                    isHalf={true}
                  />
                </div>
                <div className="rating-number is-flex-direction-column has-text-left ml-1 is-size-6">
                  {rate}
                </div>
                <div className="rating-count is-flex-direction-column has-text-primary-dark ml-3 p-1 is-size-7 is-underlined">
                  {count} ratings
                </div>
              </div>
              <p className="is-size-5 pb-1">${price}</p>
            </div>
            <div>
              <p className="is-size-7">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
