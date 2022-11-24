import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import SearchForm from "../Forms/Search Form";

function Header() {
  return (
    <Navbar>
      <Container className="container">
        <NavbarBrand href="#" className="navbar-brand">MedSearch</NavbarBrand>
        <SearchForm />
      </Container>
    </Navbar>
  );
}

export default Header;
