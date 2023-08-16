/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface TickLensInterface extends ethers.utils.Interface {
  functions: {
    'getPopulatedTicksInWord(address,int16)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'getPopulatedTicksInWord',
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'getPopulatedTicksInWord', data: BytesLike): Result;

  events: {};
}

export class TickLens extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TickLensInterface;

  functions: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      populatedTicks: {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[];
      0: {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[];
    }>;

    'getPopulatedTicksInWord(address,int16)'(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      populatedTicks: {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[];
      0: {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[];
    }>;
  };

  getPopulatedTicksInWord(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
      0: number;
      1: BigNumber;
      2: BigNumber;
    }[]
  >;

  'getPopulatedTicksInWord(address,int16)'(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
      0: number;
      1: BigNumber;
      2: BigNumber;
    }[]
  >;

  callStatic: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[]
    >;

    'getPopulatedTicksInWord(address,int16)'(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
        0: number;
        1: BigNumber;
        2: BigNumber;
      }[]
    >;
  };

  filters: {};

  estimateGas: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'getPopulatedTicksInWord(address,int16)'(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'getPopulatedTicksInWord(address,int16)'(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
