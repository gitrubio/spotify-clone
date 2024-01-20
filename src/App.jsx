
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import AuthGuard from './guard/AuthGuard';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => (
  <Routes>
    <Route path="/login" element={<Login/>} />
    <Route path="/singup" element={<Register/>} />
    <Route element={<AuthGuard />}>
      <Route path="/*" element={<Home />} />
    </Route>
    <Route path="*" element={<>404</>} />
  </Routes>
);

export default App;
