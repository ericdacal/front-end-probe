import './ListView.css'
import { useState } from 'react';
import { Form, FormControl, Button } from "react-bootstrap";
import Item from "../Item/Item";

function ListView({itemList}) {
  let [items, setItems] = useState(itemList)
  let onSearchChange = (event) => {
    items = itemList.filter(item => (item.brand.includes(event.target.value) ||  (item.model.includes(event.target.value))))
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
        <Button variant="outline-success">Search</Button>
      </Form>
      <div className="itemsList">
        {items && items.map(item =>
          <Item id={item.id} model={item.model} imgUrl={item.imgUrl} price={item.price} brand={item.brand}/>
        )}
      </div>
    </div>
    
  );
}
  
export default ListView;