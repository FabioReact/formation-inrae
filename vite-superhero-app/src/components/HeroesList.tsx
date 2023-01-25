import { Hero } from '../types/hero'
import HeroCard from './HeroCard'

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

export default HeroesList