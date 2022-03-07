import * as React from 'react';
import Countdown from 'react-countdown';
import './Time.scss';
import {
  Container,
  Row,
  Col,
  ProgressBar
} from 'react-bootstrap';

import {
  SaleStatusContext,
} from '../../ContextWrapper';
import { ISaleStatusProvider } from '../../utils/state';
import { paddingTwoDigits } from '../../utils/convert';

const Time = () => {
  const saleStatus = React.useContext<ISaleStatusProvider | undefined>(SaleStatusContext);

  interface Props {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }

  const renderer: React.FC<Props> = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    // console.log('>>> in timer: ',days, hours, minutes, seconds, completed);

    return (
      <Row className='custom-timer color-white'>
        <Col xs={6} sm={3} className='customer-timer-block'>
          <div className='customer-timer-time'>{paddingTwoDigits(days)}</div>
          <div className='customer-timer-uint'>Days</div>
        </Col>
        <Col xs={6} sm={3} className='customer-timer-block'>
          <div className='customer-timer-time'>{paddingTwoDigits(hours)}</div>
          <div className='customer-timer-uint'>Hours</div>
        </Col>
        <Col xs={6} sm={3} className='customer-timer-block'>
          <div className='customer-timer-time'>{paddingTwoDigits(minutes)}</div>
          <div className='customer-timer-uint'>Mins</div>
        </Col>
        <Col xs={6} sm={3} className='customer-timer-block'>
          <div className='customer-timer-time'>{paddingTwoDigits(seconds)}</div>
          <div className='customer-timer-uint'>Secs</div>
        </Col>
      </Row>
    );
  };
  
  return (
    <Countdown date={saleStatus?.leftTimestamp} renderer={renderer} />
  );
};

export default Time;