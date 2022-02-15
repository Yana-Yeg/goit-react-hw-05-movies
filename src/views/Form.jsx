import { useState } from 'react';

function Form({ setSearch }) {
  const [input, setInput] = useState('');

  const handleQueryChange = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleQueryChange}
          className="moviesPage_input"
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default Form;
