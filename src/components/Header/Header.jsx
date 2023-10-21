import { Outlet, NavLink } from 'react-router-dom';
import css from './header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #f22613;
  }
`;
const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav}>
            <li>
              <StyledLink to={'/'}>Home</StyledLink>
            </li>
            <li>
              <StyledLink to={'/register'}>Sign up</StyledLink>
            </li>
            <li>
              <StyledLink to={'/login'}>Log in</StyledLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
};
export default Header;
