import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../api/heroes';
import HeroCard from '../components/HeroCard';
import { Hero } from '../types/hero';

const HeroDetails = () => {
  const { id } = useParams();
  const [hero, setHero] = useState<Hero | null>(null);

  useEffect(() => {
    getHeroById(id as string).then((hero) => {
      setHero(hero);
    });
  }, []);

  return (
    <section>
      <h1>Hero Details</h1>
      <p>Id: {id}</p>
      <div>{hero && <HeroCard hero={hero} />}</div>
    </section>
  );
};

export default HeroDetails;
