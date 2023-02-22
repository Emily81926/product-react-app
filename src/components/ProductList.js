import { useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ProductsContext from "../context/products";

function ProductList() {
  const { products, fetchData, showModal, getId, handleClose } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchData();
  });

  const renderProducts = products.map((product) => {
    //send id, title, price, image as props to ProductCard
    const { id, title, price, image } = product;
    return (
      <ProductCard key={id} title={title} price={price} image={image} id={id} />
    );
  });

  return (
    <div className="container">
      <section className="section">
        <div className="columns is-multiline is-vcentered">
          {renderProducts}
        </div>
        {showModal && (
          <ProductModal
            closeModal={handleClose}
            title={products[getId - 1]["title"]}
            image={products[getId - 1]["image"]}
            price={products[getId - 1]["price"]}
            description={products[getId - 1]["description"]}
            category={products[getId - 1]["category"]}
            rate={products[getId - 1]["rating"]["rate"]}
            count={products[getId - 1]["rating"]["count"]}
          />
        )}
      </section>
    </div>
  );
}

export default ProductList;
