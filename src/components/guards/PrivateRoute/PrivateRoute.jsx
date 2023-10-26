import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from 'redux/slice/selectors';

const PrivateRoute = ({ children, ...props }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
