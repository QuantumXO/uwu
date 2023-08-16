/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../../common';

export declare namespace Pool {
  export type SwapObjStruct = {
    amount: PromiseOrValue<BigNumberish>;
    eqFee: PromiseOrValue<BigNumberish>;
    eqReward: PromiseOrValue<BigNumberish>;
    lpFee: PromiseOrValue<BigNumberish>;
    protocolFee: PromiseOrValue<BigNumberish>;
    lkbRemove: PromiseOrValue<BigNumberish>;
  };

  export type SwapObjStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    amount: BigNumber;
    eqFee: BigNumber;
    eqReward: BigNumber;
    lpFee: BigNumber;
    protocolFee: BigNumber;
    lkbRemove: BigNumber;
  };
}

export interface IStargateFeeLibraryInterface extends utils.Interface {
  functions: {
    'getFees(uint256,uint256,uint16,address,uint256)': FunctionFragment;
    'getVersion()': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'getFees' | 'getVersion'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getFees',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'getVersion', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'getFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVersion', data: BytesLike): Result;

  events: {};
}

export interface IStargateFeeLibrary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStargateFeeLibraryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getFees(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _amountSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getVersion(overrides?: CallOverrides): Promise<[string]>;
  };

  getFees(
    _srcPoolId: PromiseOrValue<BigNumberish>,
    _dstPoolId: PromiseOrValue<BigNumberish>,
    _dstChainId: PromiseOrValue<BigNumberish>,
    _from: PromiseOrValue<string>,
    _amountSD: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getVersion(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getFees(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _amountSD: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Pool.SwapObjStructOutput>;

    getVersion(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getFees(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _amountSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getVersion(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getFees(
      _srcPoolId: PromiseOrValue<BigNumberish>,
      _dstPoolId: PromiseOrValue<BigNumberish>,
      _dstChainId: PromiseOrValue<BigNumberish>,
      _from: PromiseOrValue<string>,
      _amountSD: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}