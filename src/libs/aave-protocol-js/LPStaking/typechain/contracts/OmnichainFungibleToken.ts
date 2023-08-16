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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from '../common';

export interface OmnichainFungibleTokenInterface extends utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'chainId()': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'dstContractLookup(uint16)': FunctionFragment;
    'endpoint()': FunctionFragment;
    'estimateSendTokensFee(uint16,bool,bytes)': FunctionFragment;
    'forceResumeReceive(uint16,bytes)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'isMain()': FunctionFragment;
    'lzReceive(uint16,bytes,uint64,bytes)': FunctionFragment;
    'name()': FunctionFragment;
    'owner()': FunctionFragment;
    'pauseSendTokens(bool)': FunctionFragment;
    'paused()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'sendTokens(uint16,bytes,uint256,address,bytes)': FunctionFragment;
    'setConfig(uint16,uint16,uint256,bytes)': FunctionFragment;
    'setDestination(uint16,bytes)': FunctionFragment;
    'setReceiveVersion(uint16)': FunctionFragment;
    'setSendVersion(uint16)': FunctionFragment;
    'symbol()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'allowance'
      | 'approve'
      | 'balanceOf'
      | 'chainId'
      | 'decimals'
      | 'decreaseAllowance'
      | 'dstContractLookup'
      | 'endpoint'
      | 'estimateSendTokensFee'
      | 'forceResumeReceive'
      | 'increaseAllowance'
      | 'isMain'
      | 'lzReceive'
      | 'name'
      | 'owner'
      | 'pauseSendTokens'
      | 'paused'
      | 'renounceOwnership'
      | 'sendTokens'
      | 'setConfig'
      | 'setDestination'
      | 'setReceiveVersion'
      | 'setSendVersion'
      | 'symbol'
      | 'totalSupply'
      | 'transfer'
      | 'transferFrom'
      | 'transferOwnership'
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'chainId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'dstContractLookup',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'endpoint', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'estimateSendTokensFee',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'forceResumeReceive',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'isMain', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'lzReceive',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pauseSendTokens',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'sendTokens',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setConfig',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'setDestination',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setReceiveVersion',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSendVersion',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'chainId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decreaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'dstContractLookup', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'endpoint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'estimateSendTokensFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'forceResumeReceive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'increaseAllowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isMain', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lzReceive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pauseSendTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sendTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setConfig', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDestination', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setReceiveVersion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSendVersion', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Paused(bool)': EventFragment;
    'ReceiveFromChain(uint16,uint64,uint256)': EventFragment;
    'SendToChain(uint16,bytes,uint256)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ReceiveFromChain'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SendToChain'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  isPaused: boolean;
}
export type PausedEvent = TypedEvent<[boolean], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface ReceiveFromChainEventObject {
  srcChainId: number;
  nonce: BigNumber;
  qty: BigNumber;
}
export type ReceiveFromChainEvent = TypedEvent<
  [number, BigNumber, BigNumber],
  ReceiveFromChainEventObject
>;

export type ReceiveFromChainEventFilter = TypedEventFilter<ReceiveFromChainEvent>;

export interface SendToChainEventObject {
  dstChainId: number;
  to: string;
  qty: BigNumber;
}
export type SendToChainEvent = TypedEvent<[number, string, BigNumber], SendToChainEventObject>;

export type SendToChainEventFilter = TypedEventFilter<SendToChainEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface OmnichainFungibleToken extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OmnichainFungibleTokenInterface;

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
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dstContractLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    endpoint(overrides?: CallOverrides): Promise<[string]>;

    estimateSendTokensFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      txParameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isMain(overrides?: CallOverrides): Promise<[boolean]>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _fromAddress: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pauseSendTokens(
      _pause: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendTokens(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _qty: PromiseOrValue<BigNumberish>,
      zroPaymentAddress: PromiseOrValue<string>,
      adapterParam: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDestination(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destinationContractAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setReceiveVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSendVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  chainId(overrides?: CallOverrides): Promise<number>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: PromiseOrValue<string>,
    subtractedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dstContractLookup(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  endpoint(overrides?: CallOverrides): Promise<string>;

  estimateSendTokensFee(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _useZro: PromiseOrValue<boolean>,
    txParameters: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }>;

  forceResumeReceive(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _srcAddress: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: PromiseOrValue<string>,
    addedValue: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isMain(overrides?: CallOverrides): Promise<boolean>;

  lzReceive(
    _srcChainId: PromiseOrValue<BigNumberish>,
    _fromAddress: PromiseOrValue<BytesLike>,
    nonce: PromiseOrValue<BigNumberish>,
    _payload: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pauseSendTokens(
    _pause: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendTokens(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _to: PromiseOrValue<BytesLike>,
    _qty: PromiseOrValue<BigNumberish>,
    zroPaymentAddress: PromiseOrValue<string>,
    adapterParam: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    _version: PromiseOrValue<BigNumberish>,
    _chainId: PromiseOrValue<BigNumberish>,
    _configType: PromiseOrValue<BigNumberish>,
    _config: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDestination(
    _dstChainId: PromiseOrValue<BigNumberish>,
    _destinationContractAddress: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setReceiveVersion(
    version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSendVersion(
    version: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<number>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dstContractLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    endpoint(overrides?: CallOverrides): Promise<string>;

    estimateSendTokensFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      txParameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { nativeFee: BigNumber; zroFee: BigNumber }>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMain(overrides?: CallOverrides): Promise<boolean>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _fromAddress: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pauseSendTokens(_pause: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendTokens(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _qty: PromiseOrValue<BigNumberish>,
      zroPaymentAddress: PromiseOrValue<string>,
      adapterParam: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDestination(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destinationContractAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setReceiveVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSendVersion(version: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    'Paused(bool)'(isPaused?: null): PausedEventFilter;
    Paused(isPaused?: null): PausedEventFilter;

    'ReceiveFromChain(uint16,uint64,uint256)'(
      srcChainId?: null,
      nonce?: null,
      qty?: null
    ): ReceiveFromChainEventFilter;
    ReceiveFromChain(srcChainId?: null, nonce?: null, qty?: null): ReceiveFromChainEventFilter;

    'SendToChain(uint16,bytes,uint256)'(
      dstChainId?: null,
      to?: null,
      qty?: null
    ): SendToChainEventFilter;
    SendToChain(dstChainId?: null, to?: null, qty?: null): SendToChainEventFilter;

    'Transfer(address,address,uint256)'(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dstContractLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    endpoint(overrides?: CallOverrides): Promise<BigNumber>;

    estimateSendTokensFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      txParameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isMain(overrides?: CallOverrides): Promise<BigNumber>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _fromAddress: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pauseSendTokens(
      _pause: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendTokens(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _qty: PromiseOrValue<BigNumberish>,
      zroPaymentAddress: PromiseOrValue<string>,
      adapterParam: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDestination(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destinationContractAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setReceiveVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSendVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: PromiseOrValue<string>,
      subtractedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dstContractLookup(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    endpoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    estimateSendTokensFee(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _useZro: PromiseOrValue<boolean>,
      txParameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forceResumeReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _srcAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: PromiseOrValue<string>,
      addedValue: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isMain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lzReceive(
      _srcChainId: PromiseOrValue<BigNumberish>,
      _fromAddress: PromiseOrValue<BytesLike>,
      nonce: PromiseOrValue<BigNumberish>,
      _payload: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauseSendTokens(
      _pause: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendTokens(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _to: PromiseOrValue<BytesLike>,
      _qty: PromiseOrValue<BigNumberish>,
      zroPaymentAddress: PromiseOrValue<string>,
      adapterParam: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      _version: PromiseOrValue<BigNumberish>,
      _chainId: PromiseOrValue<BigNumberish>,
      _configType: PromiseOrValue<BigNumberish>,
      _config: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDestination(
      _dstChainId: PromiseOrValue<BigNumberish>,
      _destinationContractAddress: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setReceiveVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSendVersion(
      version: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
