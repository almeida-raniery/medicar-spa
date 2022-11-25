import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap"
import NavbarBrand from "react-bootstrap/NavbarBrand";
import SearchForm from "../Forms/Search Form";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
          <NavbarBrand>MedSearch</NavbarBrand>
        </LinkContainer>
        <SearchForm />
      </Container>
    </Navbar>
  );
}

export default Header;
