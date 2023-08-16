import { ChainId } from '@aave/contract-helpers';

export type ExplorerLinkBuilderProps = {
  tx?: string;
  address?: string;
};

export type ExplorerLinkBuilderConfig = {
  baseUrl: string;
  addressPrefix?: string;
  txPrefix?: string;
};

export type NetworkConfig = {
  name: string;
  privateJsonRPCUrl?: string; // private rpc will be used for rpc queries inside the client. normally has private api key and better rate
  privateJsonRPCWSUrl?: string;
  publicJsonRPCUrl: readonly string[]; // public rpc used if not private found, and used to add specific network to wallets if user don't have them. Normally with slow rates
  publicJsonRPCWSUrl?: string;
  addresses: {
    walletBalanceProvider: string;
    /**
     * UiPoolDataProvider currently requires a non-master version
     * https://github.com/aave/protocol-v2/blob/feat/split-ui-dataprovider-logic/contracts/misc/UiPoolDataProvider.sol
     * If you deploy a market with the non default oracle or incentive controller you have to redeploy the UiPoolDataProvider as well as currently the addresses are static.
     * In the upcoming version this will no longer be needed.
     */
    uiPoolDataProvider: string;
    uiIncentiveDataProvider?: string;
    chainlinkFeedRegistry?: string;
  };
  protocolDataUrl?: string;
  cachingServerUrl?: string;
  cachingWSServerUrl?: string;
  baseUniswapAdapter?: string;
  baseAsset: string;
  baseAssetWrappedAddress?: string;
  rewardTokenSymbol: string;
  rewardTokenAddress: string;
  rewardTokenDecimals: number;
  usdMarket?: boolean;
  // function returning a link to etherscan et al
  explorerLink: string;
  explorerLinkBuilder: (props: ExplorerLinkBuilderProps) => string;
  rpcOnly: boolean;
  nftApiUrl: string;
  // set this to show faucets and similar
  isTestnet?: boolean;
  // get's automatically populated on fork networks
  isFork?: boolean;
  // contains the forked off chainId
  underlyingChainId?: number;
  bridge?: {
    brandColor: string;
    name: string;
    url: string;
    logo: string;
  };
};

export type BaseNetworkConfig = Omit<NetworkConfig, 'explorerLinkBuilder'>;

export type MarketDataType = {
  // the network the market operates on
  chainId: ChainId;
  // market logo in the topbar
  logo: string;
  // logo for the active market in dropdown
  activeLogo?: string;
  // additional logo on the right hand side
  subLogo?: string;
  // aToken prefix string, which will be cut of in the ui
  aTokenPrefix: string;
  enabledFeatures?: {
    liquiditySwap?: boolean;
    staking?: boolean;
    governance?: boolean;
    faucet?: boolean;
    collateralRepay?: boolean;
    incentives?: boolean;
    permissions?: boolean;
  };
  addresses: {
    LENDING_POOL_ADDRESS_PROVIDER: string;
    LENDING_POOL: string;
    WETH_GATEWAY?: string;
    SWAP_COLLATERAL_ADAPTER?: string;
    REPAY_WITH_COLLATERAL_ADAPTER?: string;
    FAUCET?: string;
    PERMISSION_MANAGER?: string;
    LEVERAGER?: string;
    MASTER_CHEF?: string;
    STAKING_TOKEN?: string;
    UWU_ETH_LP_TOKEN?: string;
    UWU_TOKEN: string;
    MULTI_FEE_DISTRIBUTION: string;
    MULTI_FEE_DISTRIBUTION_V1: string;
    MULTI_FEE_DISTRIBUTION_V3: string;
    AAVE_PROTOCOL_DATA_PROVIDER: string;
    CHEF_INCENTIVES_CONTROLLER: string;
    CHEF_INCENTIVES_CONTROLLER_V1: string;
    CHEF_INCENTIVES_CONTROLLER_V3: string;
    NONFUNGIBLE_POSITION_MANAGER: string;
    ALL_TOKENS?: string[];
    ALL_TOKENS_1?: string[];
  };
};
