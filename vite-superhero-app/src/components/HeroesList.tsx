import { Link } from 'react-router-dom'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

type HeroesListProps = {
  heroes: Hero[];
};

const HeroesList = ({ heroes }: HeroesListProps) => {
  return (
    <div>
      {heroes.map((hero) => (
        <Link to={`/heroes/${hero.id}`} key={hero.id}>
          <HeroCard hero={hero} />
        </Link>
      ))}
    </div>
  );
};

export default HeroesList