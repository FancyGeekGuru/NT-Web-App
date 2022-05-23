import React from 'react';
import { DappUI, useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { routeNames } from 'routes';

import { Row, Col } from 'react-bootstrap';

import './index.scss';
import NearWalletSvg from 'assets/img/NEAR Wallet.svg';
import SenderWalletSvg from 'assets/img/Sender.svg';

export const UnlockRoute: ({ loginRoute }: { loginRoute: string }) => JSX.Element = ({ loginRoute }) => {
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
				<div className='custom-unlock-card card my-4'>
					<div className='card-body py-5 px-3 px-sm-3 mx-lg-4'>
						<h4 className='mb-4' style={{ fontFamily: 'SF Pro Text Bold' }}>Connect Wallet</h4>
						<p className='mb-4' style={{ color: '#CEBFBF', fontFamily: 'SF Pro Text Bold' }}>Please select a wallet to connect to this dapp:</p>

						{/* <ExtensionLoginButton
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
            /> */}

						<Row>
							<Col xs='6'>
								<div className='wallet-box'>
									<img src={NearWalletSvg} alt='Near Wallet' />
									<p className='mt-2 mb-0' style={{ color: '#CEBFBF', fontFamily: 'SF Pro Text Bold' }}> NEAR Wallet </p>
								</div>

							</Col>

							<Col xs='6'>
								<div className='wallet-box'>
									<img src={SenderWalletSvg} alt='Sender Wallet' />
									<p className='mt-2 mb-0' style={{ color: '#CEBFBF', fontFamily: 'SF Pro Text Bold' }}> Sender </p>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UnlockRoute;
