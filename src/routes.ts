import { dAppName } from 'config';
import withPageTitle from './components/PageTitle';
import Presale from './pages/Presale';

export const routeNames = {
  dashboard: '/dashboard',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  presale: '/',
  account: '/account',
};

const routes: Array<any> = [
  {
    path: routeNames.presale,
    title: 'Presale',
    component: Presale
  }
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
