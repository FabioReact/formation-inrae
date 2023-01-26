import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHeroById } from '../api/heroes';
import HeroCard from '../components/HeroCard';
import { useGetHerobyIdQuery, useLazyGetHerobyIdQuery } from '../redux/services/heroes';
import { Hero } from '../types/hero';

const HeroDetails = () => {
  const { id } = useParams();
  // const [hero, setHero] = useState<Hero | null>(null);
  const { isError, isFetching, isLoading, isSuccess, data } = useGetHerobyIdQuery(+(id || 1));

  // useEffect(() => {
  //   getHeroById(id as string).then((hero) => {
  //     setHero(hero);
  //   });
  // }, []);

  return (
    <section>
      <h1>Hero Details</h1>
      <p>Id: {id}</p>
      <div>{isError && <span>Oops, on a une erreur :/</span>}</div>
      <div>{isLoading && <span>Loading...</span>}</div>
      <div>{isSuccess && <HeroCard hero={data} />}</div>
    </section>
  );
};

export default HeroDetails;
