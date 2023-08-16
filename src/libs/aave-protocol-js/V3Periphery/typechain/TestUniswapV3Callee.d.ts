/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface TestUniswapV3CalleeInterface extends ethers.utils.Interface {
  functions: {
    'swap0ForExact1(address,uint256,address,uint160)': FunctionFragment;
    'swap1ForExact0(address,uint256,address,uint160)': FunctionFragment;
    'swapExact0For1(address,uint256,address,uint160)': FunctionFragment;
    'swapExact1For0(address,uint256,address,uint160)': FunctionFragment;
    'uniswapV3SwapCallback(int256,int256,bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'swap0ForExact1',
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swap1ForExact0',
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapExact0For1',
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'swapExact1For0',
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: 'uniswapV3SwapCallback',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: 'swap0ForExact1', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap1ForExact0', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapExact0For1', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swapExact1For0', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'uniswapV3SwapCallback', data: BytesLike): Result;

  events: {};
}

export class TestUniswapV3Callee extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestUniswapV3CalleeInterface;

  functions: {
    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'swap0ForExact1(address,uint256,address,uint160)'(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'swap1ForExact0(address,uint256,address,uint160)'(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'swapExact0For1(address,uint256,address,uint160)'(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'swapExact1For0(address,uint256,address,uint160)'(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'uniswapV3SwapCallback(int256,int256,bytes)'(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  swap0ForExact1(
    pool: string,
    amount1Out: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'swap0ForExact1(address,uint256,address,uint160)'(
    pool: string,
    amount1Out: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swap1ForExact0(
    pool: string,
    amount0Out: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'swap1ForExact0(address,uint256,address,uint160)'(
    pool: string,
    amount0Out: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact0For1(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'swapExact0For1(address,uint256,address,uint160)'(
    pool: string,
    amount0In: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  swapExact1For0(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'swapExact1For0(address,uint256,address,uint160)'(
    pool: string,
    amount1In: BigNumberish,
    recipient: string,
    sqrtPriceLimitX96: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'uniswapV3SwapCallback(int256,int256,bytes)'(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'swap0ForExact1(address,uint256,address,uint160)'(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'swap1ForExact0(address,uint256,address,uint160)'(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'swapExact0For1(address,uint256,address,uint160)'(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    'swapExact1For0(address,uint256,address,uint160)'(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    'uniswapV3SwapCallback(int256,int256,bytes)'(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'swap0ForExact1(address,uint256,address,uint160)'(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'swap1ForExact0(address,uint256,address,uint160)'(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'swapExact0For1(address,uint256,address,uint160)'(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'swapExact1For0(address,uint256,address,uint160)'(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'uniswapV3SwapCallback(int256,int256,bytes)'(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap0ForExact1(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'swap0ForExact1(address,uint256,address,uint160)'(
      pool: string,
      amount1Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swap1ForExact0(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'swap1ForExact0(address,uint256,address,uint160)'(
      pool: string,
      amount0Out: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact0For1(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'swapExact0For1(address,uint256,address,uint160)'(
      pool: string,
      amount0In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    swapExact1For0(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'swapExact1For0(address,uint256,address,uint160)'(
      pool: string,
      amount1In: BigNumberish,
      recipient: string,
      sqrtPriceLimitX96: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'uniswapV3SwapCallback(int256,int256,bytes)'(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
