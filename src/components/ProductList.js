import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import ProductsContext from "../context/products";

function ProductList() {
  const { products, fetchData } = useContext(ProductsContext);

  useEffect(() => {
    fetchData();
  });
  
  //set initial modal not showing
  const [showModal, setShowModal] = useState(false);
  //set get the product ID when click the modal
  const [getId, setGetId] = useState("");


  const getClickedId = (id) => {
    setGetId(id);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => [setShowModal(false), setGetId("")];

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
        id={id}
        getId={getClickedId}
      />
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
