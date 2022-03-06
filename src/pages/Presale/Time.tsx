import * as React from 'react';
import Countdown from 'react-countdown';
import './Time.scss';

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
        <div id='js-clock' className='js-clock-2'>
            <div className='box'>
              <div id='js-clock-days' className='clock-number textblack'>{paddingTwoDigits(days)}</div>
              <div className='clock-label textblack'>Days</div>
            </div>
            <div className='box'>
              <div id='js-clock-hours' className='clock-number textblack'>{paddingTwoDigits(hours)}</div>
              <div className='clock-label textblack'>Hrs</div>
            </div>
            <div className='box'>
              <div id='js-clock-minutes' className='clock-number textblack'>{paddingTwoDigits(minutes)}</div>
              <div className='clock-label textblack'>Min</div>
            </div>
            <div className='box'>
              <div id='js-clock-seconds' className='clock-number textblack'>{paddingTwoDigits(seconds)}</div>
              <div className='clock-label textblack'>Sec</div>
            </div>
        </div>
    );
  };
  
  return (
    <Countdown date={saleStatus?.leftTimestamp} renderer={renderer} />
  );
};

export default Time;