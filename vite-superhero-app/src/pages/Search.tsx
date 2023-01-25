import { useRef } from 'react';
import HeroesList from '../components/HeroesList';
import { useSearchHeroes } from '../hooks/useSearchHeroes';

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { loading, error, errorMessage, heroes, searchHeroes } = useSearchHeroes();

  return (
    <section>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input ref={searchRef} type='text' id='name' name='name' />
      </fieldset>
      <button onClick={() => searchHeroes(searchRef.current?.value || '')}>Search</button>
      {loading ? <div>Chargement</div> : undefined}
      {error && <div className='text-red-600'>{errorMessage}</div>}
      <div>
        <HeroesList heroes={heroes} />
      </div>
    </section>
  );
};

export default Search;
