import { createContext, useState, useCallback } from 'react'
import getProducts from '../adapters/getProducts'

const ProductsContext = createContext()

function Provider({ children }) {
  //set get products info when call the api
  const [products, setProducts] = useState([])
  //set initial modal not showing
  const [showModal, setShowModal] = useState(false)
  //set get the product ID when click the modal
  const [getId, setGetId] = useState('')

  //1. get product information context
  const fetchData = useCallback(async () => {
    const response = await getProducts()
    setProducts(response)
  }, [])

  //2.show detail modal context
  const getProductId = id => {
    setGetId(id)
  }

  const clickDetail = () => {
    setShowModal(true)
  }

  const getModalInfo = (products, id) => {
    const product = products.filter(product => {
      return product['id'] === id
    })
    const { title, image, price, description, category } = product[0]
    const { rate, count } = product[0]['rating']

    return { title, image, price, description, category, rate, count }
  }

  const closeModal = () => [setShowModal(false), setGetId('')]

  const valueToShare = {
    products,
    showModal,
    getId,
    fetchData,
    getProductId,
    clickDetail,
    getModalInfo,
    closeModal,
  }

  return <ProductsContext.Provider value={valueToShare}>{children}</ProductsContext.Provider>
}

export { Provider }
export default ProductsContext
