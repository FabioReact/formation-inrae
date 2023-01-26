import { useRef } from 'react';
import HeroesList from '../components/HeroesList';
import { useLazySearchHeroesByNameQuery } from '../redux/services/heroes';

const Search = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchHeroes, { isLoading, isError, error, data, isSuccess }] =
    useLazySearchHeroesByNameQuery();

  return (
    <section>
      <h1>Search</h1>
      <fieldset>
        <label htmlFor='name'>Name</label>
        <input ref={searchRef} type='text' id='name' name='name' />
      </fieldset>
      <button onClick={() => searchHeroes(searchRef.current?.value || '')}>Search</button>
      {isLoading ? <div>Chargement</div> : undefined}
      {isError && <div className='text-red-600'>{error?.toString()}</div>}
      <div className='flex flex-wrap'>{isSuccess && data && <HeroesList heroes={data} />}</div>
    </section>
  );
};

export default Search;
