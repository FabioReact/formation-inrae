import React, { useState } from 'react';
import { fetcher } from '../api/fetcher';
import HeroesList from '../components/HeroesList';
import { Hero } from '../types/hero';

const Search = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSearchHandler = () => {
    setLoading(true);
		setError(false);
		setErrorMessage('');
    fetcher.get<Hero[]>(`/heroesfdgdfg?name_like=^${search}`).then((response) => {
      setHeroes(response.data);
      setLoading(false);
    }).catch(err => {
			setError(true);
			setErrorMessage(err.message);
      setLoading(false);
		});
  };

  return (
    <section>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input onChange={onChangeSearch} value={search} type='text' id='name' name='name' />
      </fieldset>
      <button onClick={onSearchHandler}>Search</button>
      {loading ? <div>Chargement</div> : undefined}
      {error && <div className='text-red-600'>{errorMessage}</div>}
      <div>
        <HeroesList heroes={heroes} />
      </div>
    </section>
  );
};

// export { Search as default}
export default Search;
