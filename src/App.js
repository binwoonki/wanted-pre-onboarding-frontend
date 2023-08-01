import './App.css';
import Todo from './Todo';
import SignUp from './SignUp'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
