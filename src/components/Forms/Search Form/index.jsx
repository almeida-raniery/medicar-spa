import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { useMedicationApi } from "../../../providers/MedicationProvider";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const { getMedicationByName } = useMedicationApi();
  const navigate = useNavigate();

  function onChangeSearch(event) {
    setSearchValue(event.target.value);
  }

  function submitForm(event) {
    event.preventDefault();

    getMedicationByName(searchValue);
    navigate("/");
  }

  return (
      <Form onSubmit={submitForm}>
        <InputGroup>
          <FormControl
            placeholder="Busca de medicamento"
            type="text"
            value={searchValue}
            onChange={onChangeSearch}
            id="searchBox"
          />
          <Button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
      </Form>
  );
}

export default SearchForm;
