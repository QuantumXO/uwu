/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { IPeripheryImmutableState } from '../IPeripheryImmutableState';

export class IPeripheryImmutableState__factory {
  static connect(address: string, signerOrProvider: Signer | Provider): IPeripheryImmutableState {
    return new Contract(address, _abi, signerOrProvider) as IPeripheryImmutableState;
  }
}

const _abi = [
  {
    inputs: [],
    name: 'WETH9',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
