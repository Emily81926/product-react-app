function ProductModal({
  closeModal,
  title,
  image,
  price,
  description,
  category,
  rate,
  count,
}) {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="card column is-one-third">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
          <button
            onClick={closeModal}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <div className="card-image px-6 p-3 column is-two-thirds container is-centered">
          <figure className="image is-4by5">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div>
              <p className="is-size-7">{category}</p>
              <span className="subtitle is-6 pt-2 pr-4">{rate} </span>
              <span className="has-text-primary-dark pt-2 ">
                {" "}
                {count} ratings
              </span>
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
