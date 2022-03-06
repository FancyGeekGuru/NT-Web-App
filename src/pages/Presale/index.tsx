import * as React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

import {
  refreshAccount,
  sendTransactions,
  useGetAccountInfo
} from '@elrondnetwork/dapp-core';
import { Balance } from '@elrondnetwork/erdjs/out';

import { dAppName } from 'config';
import { routeNames } from 'routes';
import './index.scss';
import Time from './Time';

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
  calculatePercentage,
  precisionRound
} from '../../utils/convert';
import {
  ONE_DAY_IN_SECONDS,
  SECOND_IN_MILLI
} from '../../utils/const';
import {
  EXCHANGE_RATE,
  CONTRACT_ADDRESS
} from '../../config';

const Presale = () => {
  const { account } = useGetAccountInfo();

  const tokenSaleTargetRef = React.useRef(null);

  const saleStatus = React.useContext<ISaleStatusProvider | undefined>(SaleStatusContext);
  const accountState = React.useContext<IAccountStateProvider | undefined>(AccountStateContext);

  const [buyAmountInEgld, setBuyAmountInEgld] = React.useState<number>(0);
  const [buyAmountInEsdt, setBuyAmountInEsdt] = React.useState<number>(0);

  const [buyButtonDisabled, setBuyButtonDisabled] = React.useState<boolean>(true);

  const onBuyAmountInEgld = (e: any) => {
    e.preventDefault();
    setBuyAmountInEgld(e.target.value);
    setBuyAmountInEsdt(precisionRound(e.target.value / EXCHANGE_RATE));
  };

  React.useEffect(() => {
    let disabled = true;
    if (saleStatus && saleStatus.status == Status.Started) {
      if (accountState){
        // for whitelist member
        if (accountState.isInWhitelist) {
          disabled = false;
        }
        // for non-whitelist member
        // if current timestamp is after 24 hours later presale start
        else if ((new Date()).getTime() < (saleStatus.leftTimestamp + ONE_DAY_IN_SECONDS) * SECOND_IN_MILLI) {
          // if logged in (a wallet is connected)
          if (account.address) {
            disabled = false;
          }
        }
      }
    }
    if (disabled != buyButtonDisabled) {
      setBuyButtonDisabled(disabled);
    }
  }, [saleStatus, accountState, buyAmountInEgld]);

  async function buyToken(e: any) {
    e.preventDefault();
    const tx = {
      value: Balance.egld(buyAmountInEgld),
      data: 'buy',
      receiver: CONTRACT_ADDRESS
    };
    await refreshAccount();
    await sendTransactions({
      transactions: tx,
      transactionsDisplayInfo: {
        errorMessage: 'An error has occured while buying tokens.',
        successMessage: 'Go to Account page and check your account state.'
      },
    });
  }

  return (
    <>
      <div className='section-2'>
        <div className='div-block-19'>
          <div className='div-block-21'>
          </div>
          <h1 className='heading-7 textblack'>ePAD Network</h1>
          <img src='images/EL-Logo-with-BG.png' sizes='80px' alt='epad-logo' className='team-image-circle' />
        </div>
      </div>
      <div className='section-4'>
        <div className='container-4'>
          <div>
            <h1 className='epad-presale-status-title'>Token Sale is&nbsp;{saleStatus?.status == Status.NotStarted ? 'Coming' : (saleStatus?.status == Status.Started ? 'Ongoing' : 'Ended')}</h1>
          </div>
          
          <Time />

          <div className='div-block-5'>
            <ProgressBar className='epad-presale-prograssbar' now={calculatePercentage(saleStatus?.totalBoughtAmountOfEsdt, saleStatus?.goal)} ref={tokenSaleTargetRef} />
            <div className='div-block-18'>
              <div className='text-block-13 textblack'>{saleStatus?.totalBoughtAmountOfEsdt}&nbsp;/&nbsp;{saleStatus?.goal} EPAD</div>
            </div>
          </div>
          <div className='div-block-17'>
            <div className='div-block-16'>
              <input type='number' className='epad-presale-number-input' value={buyAmountInEgld} onChange={onBuyAmountInEgld} />
              <div className='text-block-89'>EGLD</div>
            </div>
            <div>
              <div className='text-block-91'>=</div>
            </div>
            <div className='div-block-16'>
              <input type='text' className='epad-presale-number-input'  disabled={true} value={buyAmountInEsdt} />
              <div className='text-block-90'>EPAD</div>
            </div>
          </div>
          <div className='div-block-3'>
            <button className='epad-presale-buy-button button-2 textblack w-button' disabled={buyButtonDisabled} onClick={buyToken}>BUY EPAD</button>
          </div>
          <div>
            <div className='epad-presale-whitelist-info'>{accountState?.isInWhitelist ? 'You are in the whitelist.': (account.address ? (<>You are not in the whitelist. <br /> You can buy tokens from the second day of presale.</>) : 'You have to login to buy tokens.')} </div>
            <div className='text-block-98'>By purchasing EPAD you agree to our Terms &amp; Conditions.</div>
          </div>
        </div>
      </div>
      <div className='section-3'>
        <div className='pool-info-block'>
          <div className='div-block-10'>
            <h4 className='heading-8 textblack'>Pool Info</h4>
          </div>
          <div className='div-block-9'>
            <div className='div-block-7'>
              <div className='info-small textblack'>Token Distribuition</div>
              <div className='info-small textblack'>Min Amount</div>
              <div className='info-small textblack'>Max per Wallet</div>
              <div className='info-small textblack'>Token Price</div>
            </div>
            <div className='div-block-8'>
              <div className='info-big textblack'>Date UTC</div>
              <div className='info-big textblack'>0.2 EGLD</div>
              <div className='info-big textblack'>1 EGLD</div>
              <div className='info-big textblack'>1 EGLD = 12 500 EPAD</div>
            </div>
          </div>
        </div>
        <div className='token-info-block'>
          <div className='div-block-10'>
            <h4 className='heading-8 textblack'>Token Info</h4>
          </div>
          <div className='div-block-9'>
            <div className='div-block-7'>
              <div className='info-small textblack'>Token Name</div>
              <div className='info-small textblack'>Token Symbol</div>
              <div className='info-small textblack'>Total Supply</div>
              <div className='info-small textblack'>Token Identifier</div>
            </div>
            <div className='div-block-8'>
              <div className='info-big textblack'>ePAD Network Token</div>
              <div className='info-big textblack'>EPAD</div>
              <div className='info-big textblack'>{saleStatus?.goal}</div>
              <div className='info-big textblack'>EPAD-123456</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presale;
