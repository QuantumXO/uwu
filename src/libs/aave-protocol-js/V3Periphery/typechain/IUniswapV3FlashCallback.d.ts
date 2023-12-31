/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface IUniswapV3FlashCallbackInterface extends ethers.utils.Interface {
  functions: {
    'uniswapV3FlashCallback(uint256,uint256,bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'uniswapV3FlashCallback',
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: 'uniswapV3FlashCallback', data: BytesLike): Result;

  events: {};
}

export class IUniswapV3FlashCallback extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUniswapV3FlashCallbackInterface;

  functions: {
    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    'uniswapV3FlashCallback(uint256,uint256,bytes)'(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  uniswapV3FlashCallback(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  'uniswapV3FlashCallback(uint256,uint256,bytes)'(
    fee0: BigNumberish,
    fee1: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    'uniswapV3FlashCallback(uint256,uint256,bytes)'(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    'uniswapV3FlashCallback(uint256,uint256,bytes)'(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    uniswapV3FlashCallback(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    'uniswapV3FlashCallback(uint256,uint256,bytes)'(
      fee0: BigNumberish,
      fee1: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
