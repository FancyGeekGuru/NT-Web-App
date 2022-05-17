import * as React from 'react';
import { Container, ButtonGroup, Button, Row, Col} from 'react-bootstrap';
import './index.scss';
const Earn = () => {
    return (
        <>
            <Container>
                <p className="page-title"> EARN </p>
                <div className="NT-Card mt-5 total-balance-container">
                    <p className="mb-0" style={{ fontSize: '18px', letterSpacing: '-0.06rem' }}>TOTAL BALANCE</p>
                    <p style={{ fontSize: '30px', fontWeight: '500' }}>532.875 <span style={{ fontSize: '16px' }}>USD</span></p>
                    <ButtonGroup className="total-balance-buttongroup">
                        <Button className="deposit-button">Deposit</Button>
                        <Button className="withdraw-button"> Withdraw</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Row>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginRight: '65px'}}>
                                
                            </div>
                        </Col>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginLeft: '65px'}}>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginRight: '65px'}}>
                                
                            </div>
                        </Col>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginLeft: '65px'}}>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginRight: '65px'}}>
                                
                            </div>
                        </Col>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginLeft: '65px'}}>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginRight: '65px'}}>
                                
                            </div>
                        </Col>
                        <Col sm = "6">
                            <div className="deposit-card" style={{marginLeft: '65px'}}>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Earn;