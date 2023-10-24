import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type ProtectedRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

export function ProtectedRoute ({
  restrictedFor,
  redirectTo,
  children
}: ProtectedRouteProps){
  const authorizationStatus = AuthorizationStatus.NoAuth;

  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo}></Navigate>
  ) : (
    children
  );
}
