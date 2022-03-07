import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';
import './index.scss';

export const UnlockRoute: ({ loginRoute } : {loginRoute: string}) => JSX.Element = ({ loginRoute }) => {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;
  const { isLoggedIn } = useGetLoginInfo();

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = loginRoute;
    }
  }, [isLoggedIn]);

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='custom-unlock-card card my-4 text-center'>
          <div className='card-body py-4 px-2 px-sm-2 mx-lg-4'>
            <h4 className='mb-4 color-black'>Login</h4>
            <p className='mb-4 color-black'>pick a login method</p>

            <ExtensionLoginButton
              callbackRoute={loginRoute}
              loginButtonText={'Extension'}
            />
            <WebWalletLoginButton
              callbackRoute={loginRoute}
              loginButtonText={'Web wallet'}
            />
            <LedgerLoginButton
              loginButtonText={'Ledger'}
              callbackRoute={loginRoute}
              className={'test-class_name'}
            />
            <WalletConnectLoginButton
              callbackRoute={loginRoute}
              loginButtonText={'Maiar'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockRoute;
