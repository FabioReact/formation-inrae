import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  const getActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-red-700' : undefined;
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
            <NavLink className={getActiveClassName} to='login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to='profile'>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Copyright - React 2023</footer>
    </>
  );
};

export default Layout;
