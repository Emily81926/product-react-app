import { createContext, useState } from "react";
import getProducts from "../apis/getProducts";

const ProductsContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  //when initially rendered, call API to get products
  const fetchData = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  const valueToShare = {
    products,
    fetchData,
  };

  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
}

export { Provider };
export default ProductsContext;
