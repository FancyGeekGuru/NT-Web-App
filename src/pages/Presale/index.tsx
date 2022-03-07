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

  // const tokenSaleTargetRef = React.useRef(null);

  // const saleStatus = React.useContext<ISaleStatusProvider | undefined>(SaleStatusContext);
  // const accountState = React.useContext<IAccountStateProvider | undefined>(AccountStateContext);

  // const [buyAmountInEgld, setBuyAmountInEgld] = React.useState<number>(0);
  // const [buyAmountInEsdt, setBuyAmountInEsdt] = React.useState<number>(0);

  // const [buyButtonDisabled, setBuyButtonDisabled] = React.useState<boolean>(true);

  // const onBuyAmountInEgld = (e: any) => {
  //   e.preventDefault();
  //   setBuyAmountInEgld(e.target.value);
  //   setBuyAmountInEsdt(precisionRound(e.target.value / EXCHANGE_RATE));
  // };

  // React.useEffect(() => {
  //   let disabled = true;
  //   if (saleStatus && saleStatus.status == Status.Started) {
  //     if (accountState){
  //       // for whitelist member
  //       if (accountState.isInWhitelist) {
  //         disabled = false;
  //       }
  //       // for non-whitelist member
  //       // if current timestamp is after 24 hours later presale start
  //       else if ((new Date()).getTime() < (saleStatus.leftTimestamp + ONE_DAY_IN_SECONDS) * SECOND_IN_MILLI) {
  //         // if logged in (a wallet is connected)
  //         if (account.address) {
  //           disabled = false;
  //         }
  //       }
  //     }
  //   }
  //   if (disabled != buyButtonDisabled) {
  //     setBuyButtonDisabled(disabled);
  //   }
  // }, [saleStatus, accountState, buyAmountInEgld]);

  // async function buyToken(e: any) {
  //   e.preventDefault();
  //   const tx = {
  //     value: Balance.egld(buyAmountInEgld),
  //     data: 'buy',
  //     receiver: CONTRACT_ADDRESS,
  //     gasLimit: 10000000,
  //   };
  //   await refreshAccount();
  //   await sendTransactions({
  //     transactions: tx,
  //     transactionsDisplayInfo: {
  //       errorMessage: 'An error has occured while buying tokens.',
  //       successMessage: 'Go to Account page and check your account state.'
  //     },
  //   });
  // }

  return (
    <>
      <Container className='custom-presale-container'>
        <Row>
          <Col md={12} lg={6} className='custom-presale-col'>
            <div className='custom-presale-left'>
              <h1 className='custom-presale-header'>Token Sale Is Live!</h1>
              <span className='custom-presale-info'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</span>
            </div>
          </Col>
          <Col md={12} lg={6} className='custom-presale-col'>
            <div className='custom-buy-card'>
              <div className='custom-buy-card-body'>
                <h3 className='custom-buy-card-header'>BUY TOKENS HERE</h3>
                <div className='custom-buy-card-amount'>
                  <div className='custom-buy-card-amount-header'>AMOUNT TO PAY</div>
                  <div className='custom-buy-card-amount-container'>
                    <input className='custom-buy-card-amount-input' type='number' />
                    <span className='custom-buy-card-amount-unit'>EGLD</span>
                  </div>
                </div>
                <div className='custom-buy-card-amount'>
                  <div className='custom-buy-card-amount-header'>AMOUNT TO GET</div>
                  <div className='custom-buy-card-amount-container'>
                    <input className='custom-buy-card-amount-input' type='number' disabled={true} />
                    <span className='custom-buy-card-amount-unit'>SVEN</span>
                  </div>
                </div>
                <div className='custom-buy-card-info'>Minimum Buy Amount:&nbsp;&nbsp;<b>0.2 EGLD</b></div>
                <div className='custom-buy-card-info'>Maximum Buy Amount:&nbsp;&nbsp;<b>1 EGLD</b></div>
              </div>
              <div className='custom-buy-card-footer'>
                <div className='custom-buy-card-buy-button'>Buy SVEN</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Presale;
