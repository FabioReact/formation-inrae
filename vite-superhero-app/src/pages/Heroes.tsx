import { useEffect, useState } from 'react';
// import HeroCard from '../components/HeroCard';
import HeroesList from '../components/HeroesList';
import { useSearchHeroes } from '../hooks/useSearchHeroes';

type ListOfLettersProps = {
  activeLetter: string;
  callback: React.Dispatch<React.SetStateAction<string>>;
};

const ListOfLetters = ({ activeLetter, callback }: ListOfLettersProps) => {
  const letters = [];
  for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i));
  }
  return (
    <div className='flex justify-center gap-2'>
      {letters.map((letter) => (
        <span
          className={`cursor-pointer text-lg ${letter === activeLetter ? 'text-red-600' : ''}`}
          onClick={() => callback(letter)}
          key={letter}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

const Heroes = () => {
  const [letter, setLetter] = useState('A');
  const { heroes, searchHeroes } = useSearchHeroes();

  useEffect(() => {
    searchHeroes(letter);
    return () => {
      // cancel fetch request
    };
  }, [letter]);

  return (
    <section>
      <h1>Heroes List</h1>
      <ListOfLetters activeLetter={letter} callback={setLetter} />
      <div className='flex flex-wrap justify-center gap-4'>
        <HeroesList heroes={heroes} />
      </div>
    </section>
  );
};

export default Heroes;
