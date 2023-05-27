import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/Searchbar/Searchbar.module.css';
// import { Loader } from './Loader/Loader';

const Layout = () => {
  return (
    <div>
      <header className={css.Searchbar}>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink className={css.btn} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.btn} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Loader /> */}
          <Outlet />
        </Suspense>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
};
export default Layout;
