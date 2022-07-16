import "./ProductListPage.css"
import { getItemsFromAPI } from "../../utils/APIconnector";
import Loader from "../General/Loader/Loader"
import ListView from "./components/ListView/ListView"
import Header from "../General/Header/Header"
import { useEffect, useState } from "react";

function ProductListPage() {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItemsFromAPI('eric@dacal.es')
      .then((items) => {
        setItems(items)
        setLoading(false)
      })
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