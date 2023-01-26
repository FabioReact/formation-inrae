import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import { useState } from 'react';
import { ProfileContext } from './context/profile-context';
import { LoginContext } from './context/login-context';

function App() {
  const [favoriteHeroes, setFavoriteHeroes] = useState([346]);
  const [username, setUsername] = useState<string | null>(null);

  const login = (username: string, password: string) => {
    if (username === 'fabio' && password === 'secret') {
      setUsername(username);
      // Stock le token localStorage / Variable JS
    }
  };

  const logout = () => {
    setUsername(null);
  };

  return (
    <LoginContext.Provider
      value={{
        username,
        login,
        logout,
      }}
    >
      <ProfileContext.Provider
        value={{
          favoriteHeroes,
          setFavoriteHeroes,
        }}
      >
        <RouterProvider router={router} />
      </ProfileContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
