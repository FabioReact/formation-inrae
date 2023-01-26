import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { ChangeBackground } from './pages/ChangeBackground';
import Cities from './pages/Cities';
import Counter from './pages/Counter';
import HeroDetails from './pages/HeroDetails';
import Heroes from './pages/Heroes';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Search from './pages/Search';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='search' element={<Search />} />
      <Route path='profile' element={<Profile />} />
      <Route path='cities' element={<Cities />} />
      <Route path='background' element={<ChangeBackground />} />
      <Route path='heroes' element={<Heroes />} />
      <Route path='heroes/:id' element={<HeroDetails />} />
      <Route path='counter' element={<Counter />} />
    </Route>,
  ),
);

export { router };
