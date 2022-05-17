import * as React from 'react';
import { Container, ButtonGroup, Button} from 'react-bootstrap';
import './index.scss';
const Earn = () => {
    return (
        <>
            <Container>
                <p className="page-title"> DASHBOARD </p>
                <div className="total-balance-container">
                    <p className="total-balance-text">TOTAL BALANCE<br />532.875USD</p>
                    <ButtonGroup className="total-balance-buttongroup">
                        <Button className="deposit-button">Deposit</Button>
                        <Button className="withdraw-button"> Withdraw</Button>
                    </ButtonGroup>
                </div>
            </Container>
        </>
    );
};

export default Earn;