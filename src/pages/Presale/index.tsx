import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ProgressBar
} from 'react-bootstrap';

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
  AccountStateContext
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
  CONTRACT_ADDRESS,
  MIN_BUY_LIMIT,
  MAX_BUY_LIMIT
} from '../../config';

const Presale = () => {
  const { account } = useGetAccountInfo();

  const tokenSaleTargetRef = React.useRef(null);

  const saleStatus = React.useContext<ISaleStatusProvider | undefined>(SaleStatusContext);
  const accountState = React.useContext<IAccountStateProvider | undefined>(AccountStateContext);

  const [buyAmountInEgld, setBuyAmountInEgld] = React.useState<number>(0);
  const [buyAmountInEsdt, setBuyAmountInEsdt] = React.useState<number>(0);

  const [buyButtonDisabled, setBuyButtonDisabled] = React.useState<boolean>(true);

  const [buyStateInfo, setBuyStateInfo] = React.useState<string>('');

  const onChangeBuyAmountInEgld = (e: any) => {
    e.preventDefault();
    setBuyAmountInEgld(e.target.value);
    setBuyAmountInEsdt(precisionRound(e.target.value / EXCHANGE_RATE));
  };

  React.useEffect(() => {
    let disabled = true;
    let stateInfo = 'You should login to buy tokens.';
    if (saleStatus && saleStatus.status == Status.Started) {
      if (account?.address){
        if (accountState) {
          if (accountState.accountState == 2) {
            if (MIN_BUY_LIMIT <= buyAmountInEgld && buyAmountInEgld <= MAX_BUY_LIMIT) {
              disabled = false;
            }
            else {
              stateInfo = 'You can only buy tokens between min and max amount.';  
            }
          } else if (accountState.accountState == 2) {
            stateInfo = 'Only Whitelist members can buy tokens in the first stage.';  
          }
        }
      }
    }

    setBuyButtonDisabled(disabled);
    setBuyStateInfo(stateInfo);
  }, [saleStatus, buyAmountInEgld]);

  async function buyToken(e: any) {
    e.preventDefault();
    const tx = {
      value: Balance.egld(buyAmountInEgld),
      data: 'buy',
      receiver: CONTRACT_ADDRESS,
      gasLimit: 10000000,
    };
    await refreshAccount();
    await sendTransactions({
      transactions: tx
    });
  }

  return (
    <>
      <Container className='custom-presale-container'>
        <Row>
          <Col md={12} lg={6} className='custom-presale-col'>
            <div className='custom-presale-left'>
              <h1 className='custom-presale-header color-white'>Token Sale Is {saleStatus?.status == Status.NotStarted ? 'Coming' : (saleStatus?.status == Status.Started ? 'Live' : 'Ended')}!</h1>
              
              <div className='custom-presale-price'>1 EGLD = { 1 / EXCHANGE_RATE } BitX</div>
              <div className='custom-presale-goal'>GOAL: { saleStatus?.goal } BitX</div>

              <div className='custom-timer-header'>Last Moment To Grab The Tokens</div>
              
              <Time />

              <div className='custom-progress-container'>
                <ProgressBar now={saleStatus && (saleStatus.totalBoughtAmountOfEsdt / saleStatus.goal)} ref={tokenSaleTargetRef} />
                <div className='custome-progress-number color-white'>{saleStatus?.totalBoughtAmountOfEsdt} / {saleStatus?.goal} BITX</div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className='custom-presale-col'>
            <div className='custom-buy-card'>
              <div className='custom-buy-card-body'>
                <h3 className='custom-buy-card-header color-white'>BUY TOKENS HERE</h3>
                <div className='custom-buy-card-amount'>
                  <div className='custom-buy-card-amount-header'>AMOUNT TO PAY</div>
                  <div className='custom-buy-card-amount-container'>
                    <input className='custom-buy-card-amount-input' type='number' onChange={onChangeBuyAmountInEgld} defaultValue={buyAmountInEgld} />
                    <span className='custom-buy-card-amount-unit color-white'>EGLD</span>
                  </div>
                </div>
                <div className='custom-buy-card-amount'>
                  <div className='custom-buy-card-amount-header'>AMOUNT TO GET</div>
                  <div className='custom-buy-card-amount-container'>
                    <input className='custom-buy-card-amount-input' type='number' disabled={true} value={buyAmountInEsdt} />
                    <span className='custom-buy-card-amount-unit color-white'>BITX</span>
                  </div>
                </div>
                <div className='custom-buy-card-info color-white'>Minimum Buy Amount:&nbsp;&nbsp;<b>{MIN_BUY_LIMIT} EGLD</b></div>
                <div className='custom-buy-card-info color-white'>Maximum Buy Amount:&nbsp;&nbsp;<b>{MAX_BUY_LIMIT} EGLD</b></div>
              </div>
              <div className='custom-buy-card-footer'>
                <button className='custom-buy-card-buy-button' onClick={buyToken} disabled={buyButtonDisabled}>Buy BITX</button>
                <div className='custom-buy-card-buy-state-info'>{buyStateInfo}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Presale;
