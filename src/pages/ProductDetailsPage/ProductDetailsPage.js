import './ProductDetailsPage.css'
import {useLocation} from 'react-router-dom';
import { getItemDetail } from '../../utils/APIconnector';
import { useEffect, useState } from 'react';
import Header from '../General/Header/Header'



function ProductDetailsPage() {
  const location = useLocation();
  const [item, setItem] = useState({});
  useEffect(() => {
    getItemDetail(location.state.id)
      .then((item) => {
        setItem(item)
      })
  }, []);
  return (
    <div className='productDetail'>
      <Header/>
      <img src={item.imgUrl}></img>    
    </div>
  );
}

export default ProductDetailsPage;