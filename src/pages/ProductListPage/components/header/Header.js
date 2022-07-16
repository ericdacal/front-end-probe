import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../../logo.svg'
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
    return (
      <Navbar bg="light">
         <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
      </Navbar>
    );
}
  