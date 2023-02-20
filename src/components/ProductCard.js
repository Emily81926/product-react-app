function ProductCard({ title, price, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
}

export default ProductCard;
