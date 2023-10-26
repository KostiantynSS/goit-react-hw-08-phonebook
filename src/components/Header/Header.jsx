import { Outlet } from 'react-router-dom';
import css from './header.module.css';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Navigation />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
