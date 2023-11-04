import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth.selector';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
