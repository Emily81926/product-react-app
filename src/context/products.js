import { createContext, useState } from "react";
import getProducts from "../adapters/getProducts";

const ProductsContext = createContext();

function Provider({ children }) {
  //when initially rendered, call API to get products
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  //set initial modal not showing
  const [showModal, setShowModal] = useState(false);
  //set get the product ID when click the modal
  const [getId, setGetId] = useState("");
  //get product ID when clicked the Product
  const getClickedId = (id) => {
    setGetId(id);
  };

  const clickDetail = () => {
    setShowModal(true);
  };

  const handleClose = () => [setShowModal(false), setGetId("")];

  const getSingleProduct = (products, id) => {
    const product = products.filter((product) => {
      return product["id"] === id;
    });
    const { title, image, price, description, category } = product[0];
    const { rate, count } = product[0]["rating"];

    return { title, image, price, description, category, rate, count };
  }

  const valueToShare = {
    products,
    showModal,
    getId,
    fetchData,
    getClickedId,
    clickDetail,
    handleClose,
    getSingleProduct,
  };

  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
}

export { Provider };
export default ProductsContext;
