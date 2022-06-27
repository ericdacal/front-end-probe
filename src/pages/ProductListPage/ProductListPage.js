import "./ProductListPage.css"
import "./components/header/Header"
import Header from "./components/header/Header";
import ListView from "./components/ListView/ListView"

function ProductListPage() {
    return (
      <div className='productList'>
        <Header></Header>
        <ListView></ListView>
      </div>
    );
}
  
export default ProductListPage;