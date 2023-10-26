import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? children : <Navigate to={location.state ?? '/contacts'} />;
};
export default PublicRoute;
