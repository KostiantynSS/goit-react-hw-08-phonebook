import Phonebook from 'page/Phonebook/Phonebook';
import Header from './Header/Header';
import SignUpForm from 'page/SignUpForm/SignUpForm';
import { Routes, Route } from 'react-router-dom';
import LogInForm from './LogInForm/LogInForm';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {' '}
          <Route index element={<Phonebook />}></Route>
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/login" element={<LogInForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
