import { createContext } from 'react';

type LoginContextType = {
  username: string | null;
  // setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const LoginContext = createContext<LoginContextType>({
  username: null,
  login: () => null,
  logout: () => null,
  // setUsername: () => null,
});
