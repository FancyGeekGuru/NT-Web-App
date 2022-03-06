import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import { routeNames } from 'routes';
import './index.scss';

import {
  refreshAccount,
  sendTransactions,
  useGetAccountInfo,
  useGetNetworkConfig,
  useGetPendingTransactions
} from '@elrondnetwork/dapp-core';
import {
  ProxyProvider,
  Interaction,
  QueryResponseBundle,
  Address,
  AddressValue,
  Egld
} from '@elrondnetwork/erdjs';

import {
  ContractContext,
  SaleStatusContext,
  AccountStateContext,
} from '../../ContextWrapper';
import {
  Status,
  ISaleStatusProvider,
  IAccountStateProvider
} from '../../utils/state';
import {
  convertWeiToEgld,
  getDaysFromNow
} from '../../utils/convert';
import {
  endpointAccountToken
} from '../../utils/endpoint';
import {
  CONTRACT_ADDRESS,
  RELEASE_TIMESTAMPS,
  TOKEN_IDENTIFERS
} from 'config';

const Account = () => {
  const tokenSaleTargetRef = React.useRef(null);

  const { hasPendingTransactions } = useGetPendingTransactions();
  const { account } = useGetAccountInfo();
  const { network } = useGetNetworkConfig();

  const accountState = React.useContext<IAccountStateProvider | undefined>(AccountStateContext);

  const [daysFromNextUnlock, setDaysFromNextUnlock] = React.useState<number>(0);
  const [daysFromFullUnlock, setDaysFromFullUnlock] = React.useState<number>(0);

  React.useEffect(() => {
    let i;
    const currentTimestamp = (new Date()).getTime();
    for (i = 0; i < RELEASE_TIMESTAMPS.length - 1; i++) {
      if (currentTimestamp < RELEASE_TIMESTAMPS[i]) {
        break;
      }
    }

    setDaysFromNextUnlock(getDaysFromNow(RELEASE_TIMESTAMPS[i]));
    setDaysFromFullUnlock(getDaysFromNow(RELEASE_TIMESTAMPS[RELEASE_TIMESTAMPS.length - 1]));
  }, []);

  interface ITokenProvider {
    ticker: string;
    balance: number;
  }

  const [token1, setToken1] = React.useState<ITokenProvider>();
  const [token2, setToken2] = React.useState<ITokenProvider>();
  const [token3, setToken3] = React.useState<ITokenProvider>();

  const fetchAccountBalance = (tokenIdentifer: string, setFunc: any) => {
    const endpoint = endpointAccountToken(network.apiAddress, account.address, tokenIdentifer);
    // console.log('endpoint', endpoint);
    fetch(endpoint)
        .then(response => {
          if (!response.ok) {
              throw new Error('HTTP error ' + response.status);
          }
          return response.json();
        })
        .then(json => {
          console.log('>>>json', json);
          setFunc({ 
            ticker: json.ticker,
            balance: convertWeiToEgld(json.balance)
           });
        });
  };

  React.useEffect(() => {
    fetchAccountBalance(TOKEN_IDENTIFERS[0], setToken1);
    fetchAccountBalance(TOKEN_IDENTIFERS[1], setToken2);
    fetchAccountBalance(TOKEN_IDENTIFERS[2], setToken3);
  }, [hasPendingTransactions]);

  async function claim(e: any) {
    e.preventDefault();
    const tx = {
      data: 'claim',
      receiver: CONTRACT_ADDRESS
    };
    await refreshAccount();
    await sendTransactions({
      transactions: tx
    });
  }

  return (
    <>
      <div className='div-block-23'>
        <div className='teextblock up'>
          <h4 className='epad-account-heading'>Your wallet address:</h4>
          <div className='text-block-28'>{account.address}</div>
        </div>
      </div>
      <div className='div-block-14'>
        <div className='div-block-22'>
          <div className='teextblock down left'>
            <h4 className='epad-account-heading'>Wallet balance:</h4>
            <div className='amountcrypto'><strong>EGLD:&nbsp;&nbsp;</strong>{convertWeiToEgld(account.balance)}</div>
            <div className='amountcrypto'>{token1 && (<><strong>{token1.ticker}:&nbsp;</strong>{token1.balance}</>)}</div>
            <div className='amountcrypto bottom'>{token2 && (<><strong>{token2.ticker}:&nbsp;</strong>{token2.balance}</>)}</div>
            <div className='amountcrypto bottom'>{token3 && (<><strong>{token3.ticker}:&nbsp;</strong>{token3.balance}</>)}</div>
          </div>
          <div className='teextblock down right'>
            <h4 className='epad-account-heading'>EPAD Vesting:</h4>
            <div className='amountcrypto'><strong>CLAIMABLE:</strong> {accountState?.claimableAmount} EPAD</div>
            <div className='amountcrypto'><strong>LOCKED:</strong> {accountState && (accountState.lockedAmount - accountState.claimableAmount)} EPAD</div>
            <div className='amountcrypto bottom'><strong>NEXT UNLOCK:</strong> {daysFromNextUnlock} days</div>
            <div className='amountcrypto bottom'><strong>FULL UNLOCK:</strong> {daysFromFullUnlock} days</div>
          </div>
        </div>
      </div>
      <div className='epad-account-claim'>
        <button className='epad-presale-buy-button button-2 textblack w-button' disabled={!(accountState && accountState.claimableReleaseCount > 0)} onClick={claim}>Claim Locked Tokens</button>
      </div>
    </>
  );
};

export default Account;
