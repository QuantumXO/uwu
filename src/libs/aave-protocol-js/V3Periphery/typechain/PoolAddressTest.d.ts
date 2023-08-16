/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface PoolAddressTestInterface extends ethers.utils.Interface {
  functions: {
    'POOL_INIT_CODE_HASH()': FunctionFragment;
    'computeAddress(address,address,address,uint24)': FunctionFragment;
    'getGasCostOfComputeAddress(address,address,address,uint24)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'POOL_INIT_CODE_HASH', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'computeAddress',
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'getGasCostOfComputeAddress',
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'POOL_INIT_CODE_HASH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'computeAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGasCostOfComputeAddress', data: BytesLike): Result;

  events: {};
}

export class PoolAddressTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PoolAddressTestInterface;

  functions: {
    POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    'POOL_INIT_CODE_HASH()'(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    computeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'computeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getGasCostOfComputeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'getGasCostOfComputeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

  'POOL_INIT_CODE_HASH()'(overrides?: CallOverrides): Promise<string>;

  computeAddress(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  'computeAddress(address,address,address,uint24)'(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getGasCostOfComputeAddress(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  'getGasCostOfComputeAddress(address,address,address,uint24)'(
    factory: string,
    token0: string,
    token1: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<string>;

    'POOL_INIT_CODE_HASH()'(overrides?: CallOverrides): Promise<string>;

    computeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    'computeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getGasCostOfComputeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getGasCostOfComputeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    'POOL_INIT_CODE_HASH()'(overrides?: CallOverrides): Promise<BigNumber>;

    computeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'computeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfComputeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getGasCostOfComputeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    POOL_INIT_CODE_HASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'POOL_INIT_CODE_HASH()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    computeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'computeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfComputeAddress(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getGasCostOfComputeAddress(address,address,address,uint24)'(
      factory: string,
      token0: string,
      token1: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
