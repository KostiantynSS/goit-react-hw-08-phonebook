import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #1976d2;
  }
`;

const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <nav className={css.nav}>
      {isAuth ? (
        <>
          <StyledLink to={'/contacts'}>Phonebook</StyledLink>
          <UserMenu />
        </>
      ) : (
        <>
          <StyledLink to={'/'}>Phonebook</StyledLink>
          <StyledLink to={'/register'}>Sign up</StyledLink>
          <StyledLink to={'/login'}>Log in</StyledLink>
        </>
      )}
    </nav>
  );
};
export default Navigation;
