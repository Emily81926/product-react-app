import axios from "axios"

const getProducts = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_PRODUCT_API)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default getProducts
