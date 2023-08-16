/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { INFTBuyer, INFTBuyerInterface } from '../../../contracts/interfaces/INFTBuyer';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
    ],
    name: 'CollectionAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: '_allowAll',
        type: 'bool',
      },
    ],
    name: 'CollectionAllowAllChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'bool[]',
        name: '_allows',
        type: 'bool[]',
      },
    ],
    name: 'CollectionIdsSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'CollectionPriceAndTokenChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_oldNftReceiver',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_newNftReceiver',
        type: 'address',
      },
    ],
    name: 'NFTReceiverChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'Redeemed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrewTokens',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
      {
        internalType: 'bool',
        name: '_allowAll',
        type: 'bool',
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'addCollection',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllCollectionAddresses',
    outputs: [
      {
        internalType: 'address[]',
        name: 'collections_',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
    ],
    name: 'getAllowedCollectionIds',
    outputs: [
      {
        internalType: 'bool',
        name: 'allIds_',
        type: 'bool',
      },
      {
        internalType: 'uint256[]',
        name: 'ids_',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
    ],
    name: 'getCollectionPriceAndToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: 'token_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCollectionsLength',
    outputs: [
      {
        internalType: 'uint256',
        name: 'length_',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
    ],
    name: 'getUserAllowedNfts',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'ids_',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'isNftAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: 'allowed_',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_allowAll',
        type: 'bool',
      },
    ],
    name: 'setCollectionAllowAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
      {
        internalType: 'bool[]',
        name: '_allows',
        type: 'bool[]',
      },
    ],
    name: 'setCollectionIds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC721',
        name: '_collection',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'setCollectionPriceAndToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_nftReceiver',
        type: 'address',
      },
    ],
    name: 'setNftReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class INFTBuyer__factory {
  static readonly abi = _abi;
  static createInterface(): INFTBuyerInterface {
    return new utils.Interface(_abi) as INFTBuyerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): INFTBuyer {
    return new Contract(address, _abi, signerOrProvider) as INFTBuyer;
  }
}