import './ProductDetailsPage.css'
import {useLocation} from 'react-router-dom';
import { getItemDetail } from '../../utils/APIconnector';
import { useEffect, useState } from 'react';



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
      <img src={item.imgUrl}></img>    
    </div>
  );
}

export default ProductDetailsPage;