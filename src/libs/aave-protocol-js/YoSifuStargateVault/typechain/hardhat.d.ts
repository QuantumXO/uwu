/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'ILPStaking',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILPStaking__factory>;
    getContractFactory(
      name: 'IYoSifuStargateVault',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYoSifuStargateVault__factory>;
    getContractFactory(
      name: 'IStrgtEthVault',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrgtEthVault__factory>;
    getContractFactory(
      name: 'IStrgtPool',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrgtPool__factory>;
    getContractFactory(
      name: 'IStrgtRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrgtRouter__factory>;
    getContractFactory(
      name: 'ISwapper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapper__factory>;
    getContractFactory(
      name: 'YoSifuStargateVault',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YoSifuStargateVault__factory>;
    getContractFactory(
      name: 'YoSifuStargateVaultWrapper',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YoSifuStargateVaultWrapper__factory>;
    getContractFactory(
      name: 'Owned',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: 'ERC4626',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'Owned',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owned__factory>;
    getContractFactory(
      name: 'ERC4626',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4626__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;

    getContractAt(
      name: 'ILPStaking',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILPStaking>;
    getContractAt(
      name: 'IYoSifuStargateVault',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYoSifuStargateVault>;
    getContractAt(
      name: 'IStrgtEthVault',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrgtEthVault>;
    getContractAt(
      name: 'IStrgtPool',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrgtPool>;
    getContractAt(
      name: 'IStrgtRouter',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrgtRouter>;
    getContractAt(
      name: 'ISwapper',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapper>;
    getContractAt(
      name: 'YoSifuStargateVault',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YoSifuStargateVault>;
    getContractAt(
      name: 'YoSifuStargateVaultWrapper',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YoSifuStargateVaultWrapper>;
    getContractAt(name: 'Owned', address: string, signer?: ethers.Signer): Promise<Contracts.Owned>;
    getContractAt(
      name: 'ERC4626',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4626>;
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(name: 'Owned', address: string, signer?: ethers.Signer): Promise<Contracts.Owned>;
    getContractAt(
      name: 'ERC4626',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4626>;
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
