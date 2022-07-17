import "./ProductListPage.css"
import { useEffect, useState } from "react";
import { getItemsFromAPI } from "../../utils/APIconnector";
import { getItemsInLocalStorage, saveItemsInLocalStorage } from "../../utils/LocalStorage";
import Loader from "../General/Loader/Loader"
import ListView from "./components/ListView/ListView"
import Header from "../General/Header/Header"


function ProductListPage() {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    let result = getItemsInLocalStorage()
    if(result == null) {
      getItemsFromAPI()
      .then((items) => {
        saveItemsInLocalStorage(items)
        setItems(items)
      })
    }
    else {
      setItems(result)
    }
    setLoading(false)
  }, []);
  return isLoading ? (
    <Loader/>
  ) : (
    <div className='productList'>
      <Header></Header>
      <ListView itemList={items}></ListView>
    </div>
  );
}
  
export default ProductListPage;