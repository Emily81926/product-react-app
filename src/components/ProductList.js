import ProductCard from "./ProductCard";

function ProductList({ products }) {
  const renderProducts = products.map((product) => {
    //send id, title, price, image as props to ProductCard
    const { id, title, price, image } = product;
    return <ProductCard key={id} title={title} price={price} image={image} />;
  });

  return <div>{renderProducts}</div>;
}

export default ProductList;
