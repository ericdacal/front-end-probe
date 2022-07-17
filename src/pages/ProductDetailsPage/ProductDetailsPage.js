import './ProductDetailsPage.css'
import {useLocation} from 'react-router-dom';
import { getItemDetailFromAPI } from '../../utils/APIconnector';
import { useEffect, useState } from 'react';
import Header from '../General/Header/Header'
import Description from './components/Description/Description';
import Actions from './components/Actions/Actions';
import Loader from '../General/Loader/Loader';



function ProductDetailsPage() {
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItemDetailFromAPI(location.state.id)
      .then((item) => {
        setItem(item)
        setLoading(false)
      })
  }, []);
  return (
    isLoading ? (
      <Loader/>
    ) : (
    <div>
      <Header/>
      <div className='productDetail'>
        <img src={item.imgUrl}></img>    
        <div className='right'>
          <Description item={item}/>
          <Actions item={item}/>
        </div>
      </div>
    </div>
  ))
}

export default ProductDetailsPage;