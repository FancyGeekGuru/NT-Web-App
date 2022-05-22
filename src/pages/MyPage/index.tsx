import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';
import warnIcon from 'assets/img/warn.svg';
import RadialChart from './MultiRadialChart.js';
import './index.scss';
import { coins } from '../data';

const MyPage = () => {

    const color = ['#F72585', '#000000', '#F9D85E'];
    const progress = [75, 68, 58];

    return (
        <>
            <Container className='mb-5'>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> MY PAGE </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>

                <Row>
                    <Col md='7' className='mt-4'>
                        <div className="NT-Card">
                            <div className='d-flex align-items-center'>
                                <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL VALUE</p>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>

                            <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy' }}>2,665,750.99 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></span>

                            <Row className='d-flex align-items-center justify-content-between' style={{ paddingLeft: '20px' }}>
                                <div>
                                    <div>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: '#F72585' }} />
                                            <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold', fontSize: '18px' }}>Total Balance</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text', color: '#CEBFBF' }}>$ 2,665,750.99 USD</span>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: 'black' }} />
                                            <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold', fontSize: '18px' }}>Stable Coins</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text', color: '#CEBFBF' }}>$ 1,999,313.24</span>
                                    </div>
                                    <div className='mt-3'>
                                        <div className='d-flex align-items-center'>
                                            <div className='chart-state' style={{ background: '#F9D85E' }} />
                                            <span className='ml-2' style={{ fontFamily: 'SF Pro Text Bold', fontSize: '18px' }}>Volatile Asset Balance</span>
                                        </div>
                                        <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text', color: '#CEBFBF' }}>$ 666,437.74</span>
                                    </div>
                                </div>

                                <RadialChart
                                    progress={progress}
                                    color={color}
                                    strokeWidth={12}
                                    radius={60}
                                />
                            </Row>
                        </div>
                    </Col>

                    <Col md='5' className='mt-4'>
                        <div className="NT-Card" style={{ height: '100%' }}>
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL PAYED INTEREST</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>

                            <div>
                                <span style={{ fontSize: '30px', fontFamily: 'SF Pro Text Heavy' }}>93,332.75 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></span>
                            </div>

                            <div>
                                <span style={{ fontSize: '12px', fontStyle: 'italic', fontFamily: 'SF Pro Text', color: '#CEBFBF' }}>USD $93,343.43</span>
                            </div>


                            <div className='d-flex align-items-center mt-5'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL DAYS STAKED</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>

                            <div>
                                <span style={{ fontSize: '30px', fontFamily: 'SF Pro Text Heavy' }}>17 <span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}>DAYS</span></span>
                            </div>

                            <div style={{ marginTop: '100px' }}>
                                <button className='save-more-but'>SAVE MORE</button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className='filter-pad mt-5 d-flex'>
                    <input id='All-radio' type='radio' name='filterRadioGroup' value={0} defaultChecked />
                    <label htmlFor='All-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                        <div className='tab-but'>
                            ALL
                        </div>
                    </label>

                    <input id='Stable-radio' type='radio' name='filterRadioGroup' value={1} />
                    <label htmlFor='Stable-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                        <div className='tab-but'>
                            STABLE
                        </div>
                    </label>

                    <input id='Volatile-radio' type='radio' name='filterRadioGroup' value={2} />
                    <label htmlFor='Volatile-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                        <div className='tab-but'>
                            VOLATILE
                        </div>
                    </label>
                </div>

                <Row className='mt-3'>
                    {
                        coins.map((coin, index) => {
                            return (
                                <Col sm='6' key={index} style={{ marginTop: '30px' }}>
                                    <div className='NT-Card'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex align-items-center'>
                                                <img src={coin.url} />
                                                <div className='d-flex flex-column ml-4'>
                                                    <span style={{ fontFamily: 'SF Pro Text Heavy', fontSize: '16px' }}>{coin.identifier}</span>
                                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}>{coin.name}</span>
                                                </div>
                                            </div>

                                            <div className='d-flex flex-column ml-4'>
                                                <span style={{ fontFamily: 'SF Pro Text Bold', fontSize: '13px', color: '#CEC0C0' }}>Savings Balance</span>
                                                <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}>{'$' + coin.tValue}</span>
                                            </div>

                                            <div className='d-flex flex-column ml-4'>
                                                <span style={{ fontFamily: 'SF Pro Text Bold', fontSize: '13px', color: '#CEC0C0' }}>APY</span>
                                                <span style={{ fontFamily: 'SF Pro Text', fontSize: '13px', color: '#CEC0C0' }}>{coin.APY + '%'}</span>
                                            </div>
                                        </div>

                                        <div className='d-flex justify-content-center mt-5 mb-2'>
                                            <button className='my-page-deposit-but'>Deposit</button>
                                            <button className='my-page-withdraw-but'>Withdraw</button>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>

                <p className='mt-5'> TRANSACTION HISTORY </p>

                <div className='NT-Card'>

                </div>
            </Container>
        </>
    );
};

export default MyPage;