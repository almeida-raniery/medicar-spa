import { useState } from "react";

function SearchForm(){
  const [searchValue, setSearchValue] = useState();

  function onChangeSearch(event) {
    setSearchValue(event.target.value)
  }

  function submitForm(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitForm}>
      <input type="text" value={searchValue} onChange={onChangeSearch} />
      <button type="submit" >Buscar</button>
    </form>
  )
}

export default SearchForm