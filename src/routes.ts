import { dAppName } from 'config';
import withPageTitle from './components/PageTitle';
import Presale from './pages/Presale';
import UnlockPage from './pages/UnlockPage';

export const routeNames = {
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  presale: '/',
};

const routes: Array<any> = [
  {
    path: routeNames.presale,
    title: 'Presale',
    component: Presale
  },
  {
    path: routeNames.unlock,
    title: 'Unlock',
    component: UnlockPage
  },
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
