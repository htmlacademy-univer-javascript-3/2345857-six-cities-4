import { FC } from 'react';
import { MainPage } from './pages/main/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/auth/login-page';
import { OfferPage } from './pages/offers/offer-page';
import { PrivateRoute } from './components/private-route';
import { FavoritesPage } from './pages/favorites/favorites-page';
import { AppRoute } from './types/app-route';
import { NotFoundPage } from './pages/service/not-found-page';
import { MainLayout } from './layouts/main-layout';
import { useAppDispatch } from './store/helpers';
import { fetchAuthAsync, fetchFavoritesAsync, fetchOffersAsync } from './store/action';
import { CITIES } from './const';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App: FC = () => {
  const dispatch = useAppDispatch();

  [
    fetchOffersAsync(),
    fetchAuthAsync(),
    fetchFavoritesAsync()
  ].forEach(dispatch);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Index} element={
            <MainLayout color="gray">
              <MainPage />
            </MainLayout>
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage cities={CITIES} />} />
          <Route path={AppRoute.Offer} element={
            <MainLayout>
              <OfferPage />
            </MainLayout>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <MainLayout>
                <FavoritesPage />
              </MainLayout>
            </PrivateRoute>
          }
          />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  );
};
