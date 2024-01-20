
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthGuard = () => {
  const userState = useSelector((state) => state.auth);
  console.log(userState);
  return userState.status === 'authenticated' ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
