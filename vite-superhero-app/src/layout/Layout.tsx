import { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LoginContext } from '../context/login-context';

const Layout = () => {
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-red-700' : undefined;
  const { username, logout } = useContext(LoginContext);
  return (
    <>
      <nav>
        <ul className='flex justify-center gap-2 text-xl'>
          <li>
            <NavLink className={getActiveClassName} to='search'>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='heroes'>
              Heroes
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='counter'>
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='background'>
              Background
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='profile'>
              Profile
            </NavLink>
          </li>
          {username ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
              <NavLink className={getActiveClassName} to='login'>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
      <footer>Copyright - React 2023</footer>
    </>
  );
};

export default Layout;
