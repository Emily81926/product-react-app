import "bulma/css/bulma.css";
import { useState, useEffect } from "react";
import getProducts from "./apis/getProducts";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  //when initially rendered, call API to get products
  const getData = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;
