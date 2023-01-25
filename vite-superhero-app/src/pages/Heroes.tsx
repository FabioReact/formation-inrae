import { useEffect, useState } from 'react';
import { fetcher } from '../api/fetcher'
import HeroCard from '../components/HeroCard';
import HeroesList from '../components/HeroesList'
import { Hero } from '../types/hero';

type ListOfLettersProps = {
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const ListOfLetters = ({ callback }: ListOfLettersProps) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return (
    <div className='flex justify-center gap-2'>
      {letters.map((letter) => (
        <button onClick={() => callback(letter)} key={letter}>
          {letter}
        </button>
      ))}
    </div>
  );
};

const Heroes = () => {
  const [letter, setLetter] = useState('A');
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    fetcher.get<Hero[]>(`http://localhost:4000/heroes?name_like=^${letter}`)
      .then((response) => {
        setHeroes(response.data);
      });
    return () => {
      // cancel fetch request
    };
  }, [letter]);

  return (
    <section>
      <h1>Heroes List</h1>
      <ListOfLetters callback={setLetter} />
      <p>Vous avez cliqué sur la lettre: {letter}</p>
      <div className='flex flex-wrap justify-center gap-4'>
        <HeroesList heroes={heroes} />
        {/* {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))} */}
      </div>
    </section>
  );
};

// export par défaut
export default Heroes;

// export nommé
// export { Heroes }
