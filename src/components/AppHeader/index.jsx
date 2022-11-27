import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import SearchForm from "../Forms/Search Form";
import Container from "react-bootstrap/Container";

function AppHeader() {
  return (
    <Navbar className="bg-primary border-bottom shadow">
      <Container className="d-flex justify-content-start px-xl-5">
          <LinkContainer to="/">
            <NavbarBrand className="text-light">MedSearch</NavbarBrand>
          </LinkContainer>
          <SearchForm/>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
