function Search({ onChangeHandler }) {
  const onChange = (e) => {
    const value = e.target.value;
    onChangeHandler(value);
  };
  return <input onChange={onChange} type="text" />;
}

export default Search;
