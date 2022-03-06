import {
    ONE_DAY_IN_SECONDS
} from './const';
import {
    Egld,
} from '@elrondnetwork/erdjs';

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
function formatDate(date: Date) {
    return [
        date.toLocaleString('default', { month: 'long' }),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join(' ');
}

export const convertTimestampToDate = (ts: number) => {
    const date = new Date(ts);
    return formatDate(date);
};

export const convertWeiToEgld = (v: any, precision = 4) => {
    const factor = Math.pow(10, precision);
    const number = parseFloat(Egld.raw(v).toDenominated());
    return Math.round(number * factor) / factor;
};

export const convertUndefinedToZero = (v: any) => {
    return v ? v : 0;
};

export const calculatePercentage = (dividend: any, divisor: any) => {
    return convertUndefinedToZero(dividend) / convertUndefinedToZero(divisor) * 100;
};

export const paddingTwoDigits = (num: any) => {
    return num.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });
};

export const precisionRound = (number: number, precision = 4) => {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
};

export const getDaysFromNow = (targetTimestamp: number) => {
    const ts = (targetTimestamp - (new Date()).getTime());
    return Math.round(ts / ONE_DAY_IN_SECONDS);
};