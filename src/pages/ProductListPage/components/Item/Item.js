import {
  useNavigate
} from "react-router-dom";
import './Item.css'
import { getImagePathFromAPI } from "../../../../utils/APIconnector";

function Item({id, model, imgUrl, price, brand}) {
  const navigate = useNavigate();
  function itemDetails(){
    navigate("/details", {state:{id: id}});
  }
  return (
    <div className='item' onClick={itemDetails}>
      <h1> {brand} </h1>
      <h2> {model} </h2>
      <h2> {price + '$'} </h2>
      <img className="imageRef" src={imgUrl}></img>
    </div>
  );
}
  
export default Item;

//  <img src={getImagePathFromAPI(imgPath)} alt="Logo" />