import Phonebook from 'page/Phonebook/Phonebook';
import Header from './Header/Header';
import SignUpForm from 'page/SignUpForm/SignUpForm';
import { Routes, Route } from 'react-router-dom';
import LogInForm from './LogInForm/LogInForm';
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { refreshThunk } from 'redux/slice/auth';
import PrivateRoute from './guards/PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<LogInForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
