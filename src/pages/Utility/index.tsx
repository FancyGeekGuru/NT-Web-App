import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';
import warnIcon from 'assets/img/warn.svg';
import './index.scss';
const Utility = () => {
    return (
        <>
            <Container>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> UTILITY + </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>
                <p style={{fontSize:'15px', fontFamily: 'SF Pro Text Bold', paddingTop:'20px'}}>COMMUNITY FARMING EVENT 🚜</p>
                <div className="NT-Card mt-4">
                    <Row>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>CURRENT NearT PRICE</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div style={{paddingBottom: '30px'}}>
                                <span style={{ fontSize: '30px', fontFamily: 'SF Pro Text Heavy',  }}>0.25 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></span>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF'  }}>PROJECTED NearT PRICE</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div>
                                <span style={{ fontSize: '30px', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF' }}>1.25 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF' }}>USD</span></span>
                            </div>
                        </Col>
                    </Row>
                    <button className='deposit-free-but'>DEPOSIT NOW & GET FREE NearT</button>               
                </div>
                <div className="NT-Card mt-5">                    
                    <Row>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy'}}>YOUR FARMED NearT Tokens</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div>
                                <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy'}}>52,875.97 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy'}}>NearT</span></span>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF' }}>YOUR PROJECTED SHARE OF NearT Tokens</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div>
                                <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy',  color:'#CEBFBF'}}>1,152,875,97 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy',  color:'#CEBFBF' }}>NearT</span></span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="NT-Card mt-5">
                    <Row>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy'}}>YOUR CURRENT ALLOCATION VALUE</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div>
                                <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy'}}>$10,355 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy'}}>USD</span></span>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF' }}>YOUR PROJECTED ALLOCATION VALUE</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                            <div>
                                <span style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy',  color:'#CEBFBF'}}>$122,875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy',  color:'#CEBFBF' }}>NearT</span></span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="NT-Card mt-5">
                    <Row>
                        <Col sm="4">
                            <div className='d-flex align-items-center'>
                                <span className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy'}}>HOW MUCH NearT CAN I EARN?</span>
                                <img className='ml-3' src={warnIcon} alt='warn' />
                            </div>
                        </Col>
                        <Col sm="8">
                            <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF' }}>YOUR PROJECTED ALLOCATION VALUE</p>
                            <p style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF'}}>$122,875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy', color:'#CEBFBF'}}>USD</span></p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Utility;