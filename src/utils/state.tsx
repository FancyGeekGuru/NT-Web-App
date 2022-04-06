import {
    SmartContract,
    DefaultSmartContractController, 
} from '@elrondnetwork/erdjs';

export interface IContractInteractor {
    contract: SmartContract;
    controller: DefaultSmartContractController;
}


export enum Status {
    NotStarted,
    Started,
    Ended
}

export const convertToStatus = (s: string) => {
    if (s == 'NotStarted') {
        return Status.NotStarted;
    }
    if (s == 'Started') {
        return Status.Started;
    }
    return Status.Ended;
};

export interface ISaleStatusProvider {
    status: Status;
    leftTimestamp: number;
    goal: number;
    totalBoughtAmountOfEsdt: number;
}

export interface IAccountStateProvider {
    accountState: number;
}