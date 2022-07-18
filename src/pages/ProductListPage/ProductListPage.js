import './ProductListPage.css'
import { useEffect, useState } from 'react'
import { getItemsFromAPI } from '../../utils/APIconnector'
import { getItemsInLocalStorage, saveItemsInLocalStorage } from '../../utils/LocalStorage'
import Loader from '../General/Loader/Loader'
import ListView from './components/ListView/ListView'
import Header from '../General/Header/Header'

function ProductListPage () {
  const [isDataFetch, setDataFetch] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
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
    setDataFetch(false)
  }, [])
  return isDataFetch
    ? (
    <div>
      <Header page={0}/>
      <Loader/>
    </div>
      )
    : (
        <div>
          <div style={ { display: isLoading ? 'block' : 'none' } }>
            <Header page={0} itemCount={1}/>
            <Loader/>
          </div>
          <div style={ { display: isLoading ? 'none' : 'block' } }>
            <div onLoad={() => { setIsLoading(false) }} className='productList'>
              <Header page={0} itemCount={1}/>
              <ListView itemList={ items }></ListView>
            </div>
          </div>
        </div>
      )
}

export default ProductListPage
