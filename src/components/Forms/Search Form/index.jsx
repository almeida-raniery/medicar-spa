import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import FormFloating from "react-bootstrap/FormFloating";
import FormLabel from "react-bootstrap/FormLabel";
import { useMedicationApi } from "../../../providers/MedicationProvider";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const {getMedicationByName} = useMedicationApi();
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
    <form onSubmit={submitForm}>
      <InputGroup>
        <FormFloating>
          <FormLabel htmlFor="search-box">Busca</FormLabel>
          <FormControl
            placeholder="Insira sua busca aqui"
            name="search-box"
            type="text"
            value={searchValue}
            onChange={onChangeSearch}
          />
        </FormFloating>
        <Button type="submit" className="btn-primary">
          Buscar
        </Button>
      </InputGroup>
    </form>
  );
}

export default SearchForm;
