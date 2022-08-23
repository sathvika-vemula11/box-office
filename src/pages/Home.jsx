import React, { useState } from 'react';
import { apiGet } from '../misc/config';
import {
  SearchInput,
  SearchButtonWrapper,
  RadioInputsWrapper,
} from './Home.styled';
import ActorGrid from '../components/actors/ActorGrid';
import MainPage from '../components/MainPage';
import ShowsGrid from '../components/shows/ShowsGrid';

function Home() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOptions] = useState('shows');
  const isShows = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = ev => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOptions(ev.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowsGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  return (
    <div>
      <MainPage />
      <SearchInput
        type="text"
        placeholder="Search For Something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <RadioInputsWrapper>
        <label htmlFor="search-shows">
          Shows
          <input
            id="search-shows"
            type="radio"
            value="shows"
            checked={isShows}
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="search-actors">
          Actors
          <input
            id="search-actors"
            type="radio"
            value="people"
            checked={!isShows}
            onChange={onRadioChange}
          />
        </label>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {renderResults()}
    </div>
  );
}

export default Home;
