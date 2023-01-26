import { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { ChangeBackground } from './pages/ChangeBackground';
// import Cities from './pages/Cities';
// import Counter from './pages/Counter';
// import HeroDetails from './pages/HeroDetails';
// import Heroes from './pages/Heroes';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Register from './pages/Register';
// import Search from './pages/Search';

const Cities = lazy(() => import('./pages/Cities'));
const Counter = lazy(() => import('./pages/Counter'));
const HeroDetails = lazy(() => import('./pages/HeroDetails'));
const Heroes = lazy(() => import('./pages/Heroes'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const Register = lazy(() => import('./pages/Register'));
const Search = lazy(() => import('./pages/Search'));

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
