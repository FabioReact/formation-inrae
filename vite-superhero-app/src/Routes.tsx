import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { ChangeBackground } from './pages/ChangeBackground';
import Counter from './pages/Counter';
import HeroDetails from './pages/HeroDetails';
import Heroes from './pages/Heroes';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Search from './pages/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='login' element={<Login />} />
      <Route path='search' element={<Search />} />
      <Route path='profile' element={<Profile />} />
      <Route path='background' element={<ChangeBackground />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='heroes/:id' element={<HeroDetails />} />
      <Route path='counter' element={<Counter />} />
    </Route>,
  ),
);

export { router };
