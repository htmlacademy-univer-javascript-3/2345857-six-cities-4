import { FC } from 'react';
import { MainPage } from './pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/auth/login-page';
import { OfferPage } from './pages/offers/offer-page';
import { PrivateRoute } from './components/private-route';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { AppRoute } from './types/app-route';
import { NotFoundPage } from './pages/service/not-found-page';

export const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Index} element={<MainPage offers={5} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<OfferPage/>} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute user={null}>
          <FavoritesPage />
        </PrivateRoute>
      }
      />
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  </BrowserRouter>
);

