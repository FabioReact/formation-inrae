import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard'
import { Hero } from '../types/hero'

type HeroesListProps = {
  heroes: Hero[]
}

const HeroesList = ({ heroes }: HeroesListProps) => {
  return (
    <div>
      {heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
    </div>
  )
}

const Heroes = () => {
  const [letter, setLetter] = useState('A');
  const [heroes, setHeroes] = useState<Hero[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/heroes?name_like=^A')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setHeroes(data)
      });
  }, [])

  const onClickHandler = (letter: string) => {
    setLetter(letter);
  };

  return (
    <section>
      <h1>Heroes List</h1>
      <ul>
        <li onClick={() => onClickHandler('A')}>A</li>
        <li onClick={() => onClickHandler('B')}>B</li>
        <li onClick={() => onClickHandler('C')}>C</li>
        <li onClick={() => onClickHandler('D')}>D</li>
        <li onClick={() => onClickHandler('E')}>E</li>
        <li onClick={() => onClickHandler('F')}>F</li>
      </ul>
      <p>Vous avez cliqué sur la lettre: {letter}</p>
      <div>
        {heroes.map((hero) => <HeroCard key={hero.id} hero={hero} />)}
      </div>
    </section>
  );
};

// export par défaut
export default Heroes;

// export nommé
// export { Heroes }
