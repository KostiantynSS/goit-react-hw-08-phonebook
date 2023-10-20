import Phonebook from 'page/Phonebook/Phonebook';
import Header from './Header/Header';
import SignUpForm from './SignUpForm/SignUpForm';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          {' '}
          <Route index element={<Phonebook />}></Route>
          <Route path="/register" element={<SignUpForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
