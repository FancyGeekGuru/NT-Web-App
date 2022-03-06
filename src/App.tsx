import React from 'react';
import { DappUI, DappProvider } from '@elrondnetwork/dapp-core';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import { routeNames } from 'routes';
import routes from 'routes';
import '@elrondnetwork/dapp-core/build/index.css';
import ContextWrapper from './ContextWrapper';

const environment = 'devnet';

const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal,
  DappCorePages: { UnlockPage }
} = DappUI;

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000 }}
        completedTransactionsDelay={200}
      >
        <ContextWrapper />
      </DappProvider>
    </Router>
  );
};

export default App;
