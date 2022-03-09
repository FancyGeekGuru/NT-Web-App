import React, { useEffect } from 'react';
import { DappUI, DappProvider } from '@elrondnetwork/dapp-core';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import PageNotFound from 'pages/PageNotFound';
import UnlockRoute from 'pages/UnlockPage';
import { routeNames } from 'routes';
import routes from 'routes';
import '@elrondnetwork/dapp-core/build/index.css';

import {
  Address,
  AddressValue,
  AbiRegistry,
  SmartContractAbi,
  SmartContract,
  Interaction,
  QueryResponseBundle,
  ProxyProvider,
} from '@elrondnetwork/erdjs';
import {
  refreshAccount,
  sendTransactions,
  useGetAccountInfo,
  useGetNetworkConfig,
  useGetPendingTransactions,
} from '@elrondnetwork/dapp-core';

import { CONTRACT_ADDRESS, CONTRACT_ABI_URL, CONTRACT_NAME } from './config';
import { sendQuery } from './utils/transaction';
import {
    convertToStatus,
    ISaleStatusProvider
} from './utils/state';
import { SECOND_IN_MILLI, TIMEOUT } from './utils/const';
import { convertWeiToEgld } from './utils/convert';


const {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} = DappUI;

export const ContractContext = React.createContext<any>(undefined);
export const SaleStatusContext = React.createContext<ISaleStatusProvider | undefined>(undefined);

const ContextWrapper = () => {
  const { network } = useGetNetworkConfig();
  const { hasPendingTransactions } = useGetPendingTransactions();
  const { account } = useGetAccountInfo();
  const proxy = new ProxyProvider(network.apiAddress, { timeout: TIMEOUT });

  // load smart contract abi and parse it to SmartContract object for tx
  const [contract, setContract] = React.useState<any>(undefined);
  React.useEffect(() => {
    (async() => {
      const abiRegistry = await AbiRegistry.load({
        urls: [CONTRACT_ABI_URL],
      });
      const con = new SmartContract({
        address: new Address(CONTRACT_ADDRESS),
        abi: new SmartContractAbi(abiRegistry, [CONTRACT_NAME]),
      });
      setContract(con);
    })();
  }, []); // [] makes useEffect run once

  const [saleStatus, setSaleStatus] = React.useState<ISaleStatusProvider | undefined>();
  React.useEffect(() => {
    (async () => {
      if (!contract) return;
      const interaction: Interaction = contract.methods.getStatus();
      const res: QueryResponseBundle | undefined = await sendQuery(contract, proxy, interaction);
      if (!res || !res.returnCode.isSuccess()) return;
      const value = res.firstValue.valueOf();

      const status = convertToStatus(value.field0.valueOf().name);
      const leftTimestamp = value.field1.toNumber() * SECOND_IN_MILLI;
      const goal = convertWeiToEgld(value.field2.toNumber());
      const totalBoughtAmountOfEsdt = convertWeiToEgld(value.field3.toNumber());

      setSaleStatus({status, leftTimestamp, goal, totalBoughtAmountOfEsdt});
    })();
  }, [contract, hasPendingTransactions]);

  return (
    <ContractContext.Provider value={contract}>
      <SaleStatusContext.Provider value={saleStatus}>
        <Layout>
            <TransactionsToastList />
            <NotificationModal />
            <SignTransactionsModals className='custom-class-for-modals' />
            <Routes>
                <Route
                path={routeNames.unlock}
                element={<UnlockRoute loginRoute={routeNames.presale} />}
                />
                {routes.map((route: any, index: number) => (
                    <Route
                    path={route.path}
                    key={'route-key-' + index}
                    element={<route.component />}
                    />
                ))}
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </Layout>
      </SaleStatusContext.Provider>
    </ContractContext.Provider>
  );
};

export default ContextWrapper;
