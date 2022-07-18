import './Actions.css'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  useNavigate
} from 'react-router-dom'
import { addProductToCartFromAPI } from '../../../../utils/APIconnector'
import { saveNumberOfProducts } from '../../../../utils/LocalStorage'

function Actions ({ item }) {
  const navigate = useNavigate()
  const [selected, setSelection] = useState([item.options.colors[0].code, item.options.storages[0].code])
  function storageSelection (event) {
    const code = item.options.storages.find(element => element.name === event.target.value).code
    selected[0] = code
    setSelection(selected)
  }
  function colorSelection (event) {
    const code = item.options.colors.find(element => element.name === event.target.value).code
    selected[0] = code
    setSelection(selected)
  }
  function sendToCart () {
    const response = addProductToCartFromAPI(item.id, selected[1], selected[0])
    response.then((countItem) => {
      saveNumberOfProducts(countItem.count)
    })
    navigate('/')
  }
  return (
    <div id='actions'>
      <Form.Select className='selection' onChange={storageSelection} aria-label="Storage">
        {item.options.storages.map((storage) => <option key={storage.name}>{storage.name}</option>)}
      </Form.Select>
      <Form.Select className='selection' onChange={colorSelection} aria-label="Color">
        {item.options.colors.map((color) => <option key={color.name}>{color.name}</option>)}
      </Form.Select>
      <Button className='add-to-chart-button' onClick={sendToCart} >Add to cart</Button>
    </div>
  )
}
export default Actions
