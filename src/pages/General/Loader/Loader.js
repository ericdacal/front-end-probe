import Spinner from 'react-bootstrap/Spinner'
import './Loader.css'

function Loader () {
  return (
      <Spinner className='loader' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  )
}

export default Loader
