import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import { useState } from 'react';
import { ProfileContext } from './context/profile-context';

function App() {
  const [favoriteHeroes, setFavoriteHeroes] = useState([346]);

  return (
    <ProfileContext.Provider
      value={{
        favoriteHeroes,
        setFavoriteHeroes,
      }}
    >
      <RouterProvider router={router} />
    </ProfileContext.Provider>
  );
}

export default App;
