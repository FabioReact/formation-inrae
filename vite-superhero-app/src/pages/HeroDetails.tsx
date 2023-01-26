import { useParams } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import { useGetHerobyIdQuery } from '../redux/services/heroes';

const HeroDetails = () => {
  const { id } = useParams();
  const { isError, isLoading, isSuccess, data } = useGetHerobyIdQuery(+(id || 1));

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
