import { useContext } from 'react';
import { LoginContext } from '../context/login-context';
import { useProfile } from '../context/profile-context';
import { useAppSelector } from '../redux/hooks';

const Profile = () => {
  // useAppSelector(state => state.profile.favoriteHeroes)
  const cities = useAppSelector((state) => state.cities.citiesToVisit);
  const { username } = useContext(LoginContext);
  const { favoriteHeroes } = useProfile();
  return (
    <section>
      <h1>Profile</h1>
      <p>Username: {username}</p>
      <ul>
        {cities.map((city) => (
          <li key={city.cityId}>{city.cityName}</li>
        ))}
      </ul>
      <ul>
        {favoriteHeroes.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
