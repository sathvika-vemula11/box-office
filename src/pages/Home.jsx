import React, { useState } from 'react';
import MainPage from '../components/MainPage';

function Home() {
  const [input, setInput] = useState('');
  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json())
      .then(result => {
        console.log(result);
      });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  return (
    <MainPage>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
    </MainPage>
  );
}

export default Home;
