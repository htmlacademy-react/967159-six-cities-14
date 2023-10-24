import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Main, Favorites, Login, Offer, NotFound } from '../../pages/';
// import { Header } from '../header';
import { Layout } from '../layout';
import { ProtectedRoute } from '../protected-route';

import { AppRoute, AuthorizationStatus } from '../../const';

type AppOfferProps = {
  offersCount: number;
}

export function App ({offersCount}: AppOfferProps): JSX.Element {
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
              element={<Main offersCount={offersCount} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <ProtectedRoute
                  restrictedFor={AuthorizationStatus.NoAuth}
                  redirectTo={AppRoute.Login}
                >
                  <Favorites />
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
              element={<Offer />}
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
