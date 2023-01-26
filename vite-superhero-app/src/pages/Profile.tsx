import { useContext } from 'react';
import { ProfileContext, useProfile } from '../context/profile-context';

const Profile = () => {
  const { favoriteHeroes } = useContext(ProfileContext);
  // const { favoritesHeroes } = useProfile();
  return (
    <section>
      <h1>Profile</h1>
      <ul>
        {favoriteHeroes.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
