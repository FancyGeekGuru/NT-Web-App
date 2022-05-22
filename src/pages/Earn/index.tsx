import * as React from 'react';
import { Container} from 'react-bootstrap';
import externalLink from 'assets/img/External_Link.svg';
const Earn = () => {
    return (
        <>
            <Container>
                <div className='d-flex align-items-baseline'>
                    <p className="page-title"> EARN </p>
                    <div style={{ cursor: 'pointer' }}>
                        <span className='ml-3' style={{ fontFamily: 'SF Pro Text Bold', color: '#CEC0C0' }}>Docs</span>
                        <img className='ml-1' src={externalLink} />
                    </div>
                </div>
                <div className="NT-Card mt-4">
                    <p className="mb-0" style={{ fontSize: '17px', letterSpacing: '-0.01rem', fontFamily: 'SF Pro Text Heavy' }}>TOTAL BALANCE</p>
                    <p style={{ fontSize: '28px', fontFamily: 'SF Pro Text Heavy', paddingBottom:'50px'}}>532.875 <span style={{ fontSize: '17px', fontFamily: 'SF Pro Text Heavy' }}>USD</span></p>
                    <div style={{float: 'right'}}>
                        <button className='deposit-but'>Deposit</button>
                        <button className='withdraw-but'>Withdraw</button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Earn;