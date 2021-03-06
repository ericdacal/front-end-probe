import './ProductDetailsPage.css'
import { useLocation } from 'react-router-dom'
import { getItemDetailFromAPI } from '../../utils/APIconnector'
import { useEffect, useState } from 'react'
import Header from '../General/Header/Header'
import Description from './components/Description/Description'
import Actions from './components/Actions/Actions'
import Loader from '../General/Loader/Loader'
import { getNumberOfProducts, saveNumberOfProducts } from '../../utils/LocalStorage'

function ProductDetailsPage () {
  const [isDataFetch, setDataFetch] = useState(true)
  const [isLoading, setLoading] = useState(true)
  const location = useLocation()
  const [item, setItem] = useState({})
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    getItemDetailFromAPI(location.state.id)
      .then((item) => {
        setItem(item)
        setDataFetch(false)
      })
    const result = getNumberOfProducts()
    if (result == null) {
      saveNumberOfProducts(0)
    } else setItemCount(result)
  }, [])
  return (
    isDataFetch
      ? (
      <Loader/>
        )
      : (
    <div>
      <Header page={1} itemCount={itemCount}/>
      <div style={ { display: isLoading ? 'block' : 'none' } }>
        <Loader/>
      </div>
      <div style={ { display: isLoading ? 'none' : 'block' } }>
        <div className='productDetail'>
          <img onLoad={() => setLoading(false)} src={item.imgUrl}></img>
          <div className="right">
            <Description item={item}/>
            <Actions item={item}/>
          </div>
        </div>
      </div>
    </div>
        ))
}

export default ProductDetailsPage
