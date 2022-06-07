import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';
import repeatPng from 'assets/img/repeat.png';
import './index.scss';
import warnIcon from 'assets/img/warn.svg';
const Utility = () => {
    return (
        <>
            <Container className='mb-5'>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> UTILITY + </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0', fontSize:'13px' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>

                <p style={{ fontSize: '15px', fontFamily: 'SF Pro Text Bold', paddingTop: '20px' }}>COMMUNITY FARMING EVENT 🚜</p>

                <div className="NT-Card mt-4" style={{width:'1220px'}}>
                    <Row>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>CURRENT NearT PRICE</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy', paddingBottom: '20px' }}>0.25<span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}> USD</span></p>
                        </Col>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>PROJECTED NearT PRICE</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy', paddingBottom: '20px', color: '#CEBFBF' }}>1.25 <span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>USD</span></p>
                        </Col>
                    </Row>
                    <button className='deposit-free-but'>DEPOSIT NOW & GET FREE NearT</button>
                </div>

                <div className="NT-Card mt-5" style={{width:'1220px'}}>
                    <Row>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>YOUR FARMED NearT Tokens</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy' }}>52,875.97<span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}> NearT</span></p>
                        </Col>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>YOUR PROJECTED SHARE OF NearT Tokens</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>1,152,875,97 <span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}>NearT</span></p>
                        </Col>
                    </Row>
                </div>

                <div className="NT-Card mt-5" style={{width:'1220px'}}>
                    <Row>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>YOUR CURRENT ALLOCATION VALUE</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy' }}>$10,355<span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}> USD</span></p>
                        </Col>
                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>YOUR PROJECTED ALLOCATION VALUE</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy', color: '#CEBFBF' }}>$122,875<span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}> USD</span></p>
                        </Col>
                    </Row>
                </div>

                <div className='NT-Card mt-5' style={{width:'1220px'}}>
                    <Row className='align-items-center'>
                        <Col sm="5">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>HOW MUCH NearT CAN I EARN?</p>

                            <button className='deposit-free-but mt-5'>DEPOSIT NOW & GET FREE NearT</button>
                        </Col>
                        <Col sm="7">
                            <div className='d-flex'>
                                <div className='d-flex flex-column '>
                                    <input className='amount-input' style={{ width: '100%' }} />
                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px' }}>Your Total Deposit in USD</span>
                                </div>
                                <div className='d-flex align-items-center ml-4 mr-4'>
                                    <img src={repeatPng} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <input className='amount-input' style={{ width: '100%' }} />
                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px' }}>Your expected NearT Allocation</span>
                                    <span style={{ fontFamily: 'SF Pro Text', fontSize: '11px', fontStyle: 'italic', color: '#CEBFBF' }}>The Projected Allocation Value: $323,121.75 USD</span>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>

                <p className='mt-5' style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>MONTHLY REWARDS PLUS PROGRAM</p>

                <div className='NT-Card' style={{width:'1220px'}}>
                    <Row>
                        <Col sm="6">
                            <p style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>NEAR TREASURY REWARDS PLUS PROGRAM</p>
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', marginTop:'60px' }}>YOUR QUALIFIED DEPOSIT VALUE</p>
                            <p style={{ fontSize: '35px', fontFamily: 'SF Pro Text Heavy' }}>52,875.97<span style={{ fontSize: '20px', fontFamily: 'SF Pro Text Heavy' }}> USD</span></p>

                            <button className='deposit-free-but mt-4'>SAVE NOW</button>
                        </Col>

                        <Col sm="6">
                            <p className="mb-0" style={{ fontSize: '20px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>QUALIFYING PHASE STATUS</p>

                            <div className='d-flex mt-3'>
                                <div className='NT-Badge'>ACTIVE</div>
                            </div>

                            <div className='info-card mt-5 d-flex align-items-center'>
                                <div><img src={warnIcon} /></div>
                                <div className='ml-4'>
                                    IF THE BUTTON IS GREEN, THIS MEANS EVERY DEPOSIT DURING THIS PERIOD QUALIFIES YOU FOR THE MONTHLY REWARDS+ PROGRAM.
                                    <br /><br />
                                    IF THE BUTTON IS RED, THIS MEANS YOU NEED TO KEEP YOUR BALANCE DEPOSITED TO BECOME ELIGIBLE FOR THE NEXT QUALIFIYNG PHASE.
                                    <br /><br />
                                    ALL PAYOUTS OF THE REWARDS+ PROGRAM ARE AUTOMATED.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </>
    );
};

export default Utility;