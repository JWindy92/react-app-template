import { Navigate, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function isAuthenticated() {
    const token = localStorage.getItem('jwt');
    console.log(token)
    if (token) {
      const decoded = jwt_decode(token);
      // Check if token is expired
      if (decoded.exp < Date.now() / 1000) {
        // Token is expired
        return false;
      } else {
        // Token is valid
        return true;
      }
    } else {
      // No token found
      return false;
    }
  }

function PrivateRoute({ children }) {
    const auth = isAuthenticated();
    return auth ? <>{children}</> : <Navigate to="/login" />;
}
export default PrivateRoute;
