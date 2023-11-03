import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Main, Favorites, Login, Offer, NotFound } from '../../pages/';
import { Layout } from '../layout';
import { ProtectedRoute } from '../protected-route';

import { AppRoute, AuthorizationStatus } from '../../const';
import { TOffer } from '../../types/offer';

type TAppProps = {
  offers: TOffer[];
}

export function App ({ offers }: TAppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Layout />}
          >
            <Route
              index
              element={<Main offers={offers} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <ProtectedRoute
                  restrictedFor={AuthorizationStatus.NoAuth}
                  redirectTo={AppRoute.Login}
                >
                  <Favorites offers={offers}/>
                </ProtectedRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <ProtectedRoute
                  restrictedFor={AuthorizationStatus.Auth}
                  redirectTo={AppRoute.Root}
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:offerId`}
              element={<Offer offers={offers} />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
