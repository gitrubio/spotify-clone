
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import AuthGuard from './guard/AuthGuard';
import Login from './pages/Login';
import Register from './pages/Register';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const App = () => {
  const  { status } = useSelector((state) => state.auth);
  return (<Routes>
    <Route path="/login" element={status === 'authenticated' ? <Navigate to={'/'}/> :<Login />} />
    <Route path="/singup" element={status === 'authenticated' ? <Navigate to={'/'}/> : <Register />} />
    <Route element={<AuthGuard />}>
      <Route path="/*" element={<Home />} />
    </Route>
    <Route path="*" element={<>404</>} />
  </Routes>
  )
}

export default App;
