import {
  useNavigate
} from 'react-router-dom'
import './Item.css'

function Item ({ id, model, imgUrl, price, brand }) {
  const navigate = useNavigate()
  function itemDetails () {
    navigate('/details', { state: { id } })
  }
  return (
    <div className='item' onClick={itemDetails}>
      <h1 > {brand} </h1>
      <p> {model} </p>
      <p> {price + '$'} </p>
      <img className="imageRef" src={imgUrl}></img>
    </div>
  )
}

export default Item
