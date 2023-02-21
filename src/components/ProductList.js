import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductList({ products }) {
  //set initial modal not showing
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => [
    setShowModal(false)
  ]

  const renderProducts = products.map((product) => {
    //send id, title, price, image as props to ProductCard
    const { id, title, price, image } = product;
    return (
      <ProductCard
        showModal={handleClick}
        key={id}
        title={title}
        price={price}
        image={image}
      />
    );
  });

  return (
    <div className="container">
      <section className="section">
        <div className="columns is-multiline is-vcentered">
          {renderProducts}
        </div>
        {showModal && <ProductModal closeModal={handleClose}/>}
      </section>
    </div>
  );
}

export default ProductList;
