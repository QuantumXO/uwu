/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  IStargateFeeLibrary,
  IStargateFeeLibraryInterface,
} from '../../../contracts/interfaces/IStargateFeeLibrary';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_srcPoolId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_dstPoolId',
        type: 'uint256',
      },
      {
        internalType: 'uint16',
        name: '_dstChainId',
        type: 'uint16',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amountSD',
        type: 'uint256',
      },
    ],
    name: 'getFees',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eqFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'eqReward',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lpFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'protocolFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lkbRemove',
            type: 'uint256',
          },
        ],
        internalType: 'struct Pool.SwapObj',
        name: 's',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getVersion',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IStargateFeeLibrary__factory {
  static readonly abi = _abi;
  static createInterface(): IStargateFeeLibraryInterface {
    return new utils.Interface(_abi) as IStargateFeeLibraryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IStargateFeeLibrary {
    return new Contract(address, _abi, signerOrProvider) as IStargateFeeLibrary;
  }
}