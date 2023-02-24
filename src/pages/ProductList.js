import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import useProductsContext from "../hooks/use-products-context";

function ProductList() {
  const { products, fetchData, showModal, getId } = useProductsContext();
  
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
        {showModal && <ProductModal products={products} id={getId} />}
      </section>
    </div>
  );
}

export default ProductList;
