function Search() {
  function searchHandler(e) {
    console.log(e.target.input.value);
    e.target.input.value = null;
    e.preventDefault();
  }

  return (
    <form onSubmit={searchHandler}>
      <input type="text" name="input" />
      <input type="submit" value="search" />
    </form>
  );
}

export default Search;
