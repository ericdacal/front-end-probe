import './Item.css'
import logo from '../../../../logo.svg'

function Item() {
    return (
      <div className='item'>
        <h1> PC 1 </h1>
        <img src={logo} alt="Logo" />
      </div>
    );
}
  
export default Item;