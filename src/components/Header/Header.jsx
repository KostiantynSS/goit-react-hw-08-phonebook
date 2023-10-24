import { Outlet, NavLink } from 'react-router-dom';
import css from './header.module.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/slice/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #f22613;
  }
`;
const Header = () => {
  const isAuth = useSelector(selectIsAuth);
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
