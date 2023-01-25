import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import { Hero } from '../types/hero';

type HeroesListProps = {
  heroes: Hero[];
};

const HeroesList = ({ heroes }: HeroesListProps) => {
  return (
    <div>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

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
    fetch(`http://localhost:4000/heroes?name_like=^${letter}`)
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      });
    return () => {
      // cancel fetch request
    };
  }, [letter]);

  const onClickHandler = (letter: string) => {
    setLetter(letter);
  };

  return (
    <section>
      <h1>Heroes List</h1>
      <ListOfLetters callback={setLetter} />
      <p>Vous avez cliqué sur la lettre: {letter}</p>
      {/* <HeroesList heroes={heroes} /> */}
      <div className='flex flex-wrap justify-center gap-4'>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

// export par défaut
export default Heroes;

// export nommé
// export { Heroes }
