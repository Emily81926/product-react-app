function ProductCard({ title, price, image, showModal, id, getId, num }) {
  const handleClick = () => {
    getId(id);
    showModal();
  };
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
            <p className="title is-6">{title}{num}</p>
            <p className="subtitle is-6 pt-2">${price}</p>
          </div>
        </div>
        <footer className="card-footer">
          <button
            className="button is-ghost card-footer-item"
            onClick={handleClick}
          >
            detail
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ProductCard;
