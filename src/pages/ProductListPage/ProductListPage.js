import './ProductListPage.css'
import { useEffect, useState } from 'react'
import { getItemsFromAPI } from '../../utils/APIconnector'
import { getItemsInLocalStorage, saveItemsInLocalStorage, saveNumberOfProducts, getNumberOfProducts } from '../../utils/LocalStorage'
import Loader from '../General/Loader/Loader'
import ListView from './components/ListView/ListView'
import Header from '../General/Header/Header'

function ProductListPage () {
  const [isDataFetch, setDataFetch] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    const result = getItemsInLocalStorage()
    if (result == null) {
      getItemsFromAPI()
        .then((items) => {
          saveItemsInLocalStorage(items)
          setItems(items)
        })
    } else {
      setItems(result)
    }
    const numberProducts = getNumberOfProducts()
    if (numberProducts == null) {
      saveNumberOfProducts(0)
    } else setItemCount(numberProducts)
    setDataFetch(false)
  }, [])
  return isDataFetch
    ? (
    <div>
      <Header page={0} itemCount={itemCount}/>
      <Loader/>
    </div>
      )
    : (
        <div>
          <div style={ { display: isLoading ? 'block' : 'none' } }>
            <Header page={0} itemCount={itemCount}/>
            <Loader/>
          </div>
          <div style={ { display: isLoading ? 'none' : 'block' } }>
            <div onLoad={() => { setIsLoading(false) }} className='productList'>
              <Header page={0} itemCount={itemCount}/>
              <ListView itemList={ items }></ListView>
            </div>
          </div>
        </div>
      )
}

export default ProductListPage
