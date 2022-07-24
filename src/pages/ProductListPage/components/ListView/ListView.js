import './ListView.css'
import { useState } from 'react'
import { Form, FormControl } from 'react-bootstrap'
import Item from '../Item/Item'

function ListView ({ itemList }) {
  let [items, setItems] = useState(itemList)
  const onSearchChange = (event) => {
    items = itemList.filter(item => (item.brand.includes(event.target.value) || (item.model.includes(event.target.value))))
    setItems(items)
  }
  return (
    <div className='list-view'>
      <Form className="searchForm">
        <FormControl
          onChange={onSearchChange}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <div className="itemsList">
        {items && items.map(item =>
          <Item key={item.id} id={item.id} model={item.model} imgUrl={item.imgUrl} price={item.price} brand={item.brand}/>
        )}
      </div>
    </div>
  )
}

export default ListView
