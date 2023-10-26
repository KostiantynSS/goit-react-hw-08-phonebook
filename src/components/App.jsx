import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { refreshThunk } from 'redux/auth';
import Header from './Header/Header';
import PrivateRoute from './guards/PrivateRoute/PrivateRoute';
import PublicRoute from './guards/PublicRoute/PublicRoute';
import WellcomePage from './WellcomePage/WellcomePage';

const SignUpForm = lazy(() => import('../page/SignUpForm/SignUpForm'));
const LogInForm = lazy(() => import('../page/LogInForm/LogInForm'));
const Phonebook = lazy(() => import('page/Phonebook/Phonebook'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PublicRoute>
                <WellcomePage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <SignUpForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInForm />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
