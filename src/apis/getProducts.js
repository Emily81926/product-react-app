import axios from "axios";

const getProducts = async () => {
  const response = await axios.get(process.env.REACT_APP_PRODUCT_API);
  return response.data;
};

export default getProducts;
