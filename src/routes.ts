import { dAppName } from 'config';
import Dashboard from 'pages/Dashboard';
import Earn from 'pages/Earn';
import MyPage from 'pages/MyPage';
import Utility from 'pages/Utility';
import withPageTitle from './components/PageTitle';
import UnlockPage from './pages/UnlockPage';

export const routeNames = {
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  dashboard: '/',
  earn: '/earn',
  mypage: '/mypage',
  utility: '/utility',
};

const routes: Array<any> = [
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard
  },

  {
    path: routeNames.mypage,
    title: 'My Page',
    component: MyPage
  },

  {
    path: routeNames.earn,
    title: 'Earn',
    component: Earn
  },

  {
    path: routeNames.utility,
    title: 'Utility',
    component: Utility
  },

  {
    path: routeNames.unlock,
    title: 'Unlock',
    component: UnlockPage
  },
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • ${dAppName}`
    : `${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
