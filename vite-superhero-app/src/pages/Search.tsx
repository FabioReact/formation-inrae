import React, { useState } from 'react';
import { fetcher } from '../api/fetcher'
import HeroesList from '../components/HeroesList';
import { Hero } from '../types/hero';

const Search = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [search, setSearch] = useState('');

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

	const onSearchHandler = () => {
		fetcher.get<Hero[]>(`http://localhost:4000/heroes?name_like=^${search}`)
			.then((response) => {
				setHeroes(response.data)
			})
	}

  return (
    <section>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input onChange={onChangeSearch} value={search} type='text' id='name' name='name' />
      </fieldset>
      <button onClick={onSearchHandler}>Search</button>
      <div>
        <HeroesList heroes={heroes} />
      </div>
    </section>
  );
};

// export { Search as default}
export default Search;
