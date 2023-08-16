/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { TickLensTest } from '../TickLensTest';

export class TickLensTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickLensTest> {
    return super.deploy(overrides || {}) as Promise<TickLensTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickLensTest {
    return super.attach(address) as TickLensTest;
  }
  connect(signer: Signer): TickLensTest__factory {
    return super.connect(signer) as TickLensTest__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TickLensTest {
    return new Contract(address, _abi, signerOrProvider) as TickLensTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'int16',
        name: 'tickBitmapIndex',
        type: 'int16',
      },
    ],
    name: 'getGasCostOfGetPopulatedTicksInWord',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
      {
        internalType: 'int16',
        name: 'tickBitmapIndex',
        type: 'int16',
      },
    ],
    name: 'getPopulatedTicksInWord',
    outputs: [
      {
        components: [
          {
            internalType: 'int24',
            name: 'tick',
            type: 'int24',
          },
          {
            internalType: 'int128',
            name: 'liquidityNet',
            type: 'int128',
          },
          {
            internalType: 'uint128',
            name: 'liquidityGross',
            type: 'uint128',
          },
        ],
        internalType: 'struct ITickLens.PopulatedTick[]',
        name: 'populatedTicks',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506105b8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063351fb4781461003b578063f0c2e7bc14610064575b600080fd5b61004e6100493660046103c2565b610084565b60405161005b91906104f0565b60405180910390f35b6100776100723660046103c2565b610353565b60405161005b919061057d565b606060008373ffffffffffffffffffffffffffffffffffffffff16635339c296846040518263ffffffff1660e01b81526004016100c19190610561565b60206040518083038186803b1580156100d957600080fd5b505afa1580156100ed573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011191906104d8565b90506000805b61010081101561013b576001811b831615610133576001909101905b600101610117565b5060008573ffffffffffffffffffffffffffffffffffffffff1663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561018457600080fd5b505afa158015610198573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101bc9190610400565b90508167ffffffffffffffff811180156101d557600080fd5b5060405190808252806020026020018201604052801561020f57816020015b6101fc61036e565b8152602001906001900390816101f45790505b50935060005b610100811015610349576001811b841615610341576040517ff30dba93000000000000000000000000000000000000000000000000000000008152600187900b60020b60081b8201830290600090819073ffffffffffffffffffffffffffffffffffffffff8b169063f30dba939061029190869060040161056f565b6101006040518083038186803b1580156102aa57600080fd5b505afa1580156102be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e29190610428565b5050505050509150915060405180606001604052808460020b815260200182600f0b8152602001836fffffffffffffffffffffffffffffffff168152508887600190039750878151811061033257fe5b60200260200101819052505050505b600101610215565b5050505092915050565b6000805a90506103638484610084565b505a90039392505050565b604080516060810182526000808252602082018190529181019190915290565b8051801515811461039e57600080fd5b919050565b805161039e81610586565b805163ffffffff8116811461039e57600080fd5b600080604083850312156103d4578182fd5b82356103df81610586565b91506020830135600181900b81146103f5578182fd5b809150509250929050565b600060208284031215610411578081fd5b81518060020b8114610421578182fd5b9392505050565b600080600080600080600080610100898b031215610444578384fd5b88516fffffffffffffffffffffffffffffffff81168114610463578485fd5b80985050602089015180600f0b811461047a578485fd5b80975050604089015195506060890151945060808901518060060b811461049f578485fd5b93506104ad60a08a016103a3565b92506104bb60c08a016103ae565b91506104c960e08a0161038e565b90509295985092959890939650565b6000602082840312156104e9578081fd5b5051919050565b602080825282518282018190526000919060409081850190868401855b82811015610554578151805160020b855286810151600f0b878601528501516fffffffffffffffffffffffffffffffff16858501526060909301929085019060010161050d565b5091979650505050505050565b60019190910b815260200190565b60029190910b815260200190565b90815260200190565b73ffffffffffffffffffffffffffffffffffffffff811681146105a857600080fd5b5056fea164736f6c6343000706000a';
