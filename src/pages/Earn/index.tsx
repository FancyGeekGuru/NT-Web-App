import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';
import { coins } from '../data';
import warnIcon from 'assets/img/warn.svg';

const Earn = () => {
    return (
        <>
            <Container className='mb-5'>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> EARN </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>
                <div className="NT-Card mt-4">
                    <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL BALANCE</p>
                    <p style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy', paddingBottom: '50px' }}>532.875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></p>
                    <div className='d-flex' style={{ justifyContent: 'right' }}>
                        <button className='my-page-deposit-but'>Deposit</button>
                        <button className='my-page-withdraw-but'>Withdraw</button>
                    </div>
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

                <div className='mt-5 NT-Card'>
                    <div className='d-flex align-items-center'>
                        <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>EXPECTED INTEREST BASED ON YOUR DEPOSIT</p>
                        <img className='ml-3' src={warnIcon} alt='warn' />
                    </div>

                    <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy' }}>432,875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></span>



                    <div className='filter-pad mt-5 d-flex'>
                        <input id='year-radio' type='radio' name='DateRadioGroup' value={0} defaultChecked />
                        <label htmlFor='year-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                            <div className='tab-but'>
                                YEAR
                            </div>
                        </label>

                        <input id='month-radio' type='radio' name='DateRadioGroup' value={1} />
                        <label htmlFor='month-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                            <div className='tab-but'>
                                MONTH
                            </div>
                        </label>

                        <input id='week-radio' type='radio' name='DateRadioGroup' value={2} />
                        <label htmlFor='week-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                            <div className='tab-but'>
                                WEEK
                            </div>
                        </label>

                        <input id='day-radio' type='radio' name='DateRadioGroup' value={3} />
                        <label htmlFor='day-radio' style={{ width: '100%', textAlign: 'center', marginBottom: '0px' }}>
                            <div className='tab-but'>
                                DAY
                            </div>
                        </label>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Earn;