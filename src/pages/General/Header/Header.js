import './Header.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function Header ({ page, itemCount }) {
  function breadcrumbSelection () {
    if (page === 0) {
      return (<div><Breadcrumb.Item active href="/">Product List Page</Breadcrumb.Item></div>)
    } else {
      return (<div><Breadcrumb.Item href="/">Product List Page</Breadcrumb.Item><Breadcrumb.Item active>Product Details</Breadcrumb.Item></div>)
    }
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
      <Navbar.Brand href="/">
            <img
              src={require('../../../resources/logo.png')}
              width="100px"
              height= "auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Brand>
          <Breadcrumb>
            {
              breadcrumbSelection()
            }
          </Breadcrumb>
        </Navbar.Brand>
        <Navbar.Brand>
          <Badge color='secondary' badgeContent={itemCount}>
            <ShoppingCartIcon />{''}
          </Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
