/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface TestCallbackValidationInterface extends ethers.utils.Interface {
  functions: {
    'verifyCallback(address,address,address,uint24)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'verifyCallback',
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'verifyCallback', data: BytesLike): Result;

  events: {};
}

export class TestCallbackValidation extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestCallbackValidationInterface;

  functions: {
    verifyCallback(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      pool: string;
      0: string;
    }>;

    'verifyCallback(address,address,address,uint24)'(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      pool: string;
      0: string;
    }>;
  };

  verifyCallback(
    factory: string,
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  'verifyCallback(address,address,address,uint24)'(
    factory: string,
    tokenA: string,
    tokenB: string,
    fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    verifyCallback(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    'verifyCallback(address,address,address,uint24)'(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    verifyCallback(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'verifyCallback(address,address,address,uint24)'(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyCallback(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'verifyCallback(address,address,address,uint24)'(
      factory: string,
      tokenA: string,
      tokenB: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}