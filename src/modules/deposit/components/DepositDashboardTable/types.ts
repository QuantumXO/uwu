import { ComputedUserReserve, RawReserveData } from '@aave/math-utils';
import { BigNumber } from '@aave/protocol-js';
// import { ComputedReserveData } from '@aave/protocol-js';
import { UserSummary } from '../../../../libs/pool-data-provider';
import { ComputedReserveData } from '../../../../libs/pool-data-provider/providers/dynamic-pool-data-provider';

export type CollateralModalData = {
  history: any;
  id: string;
  usageAsCollateralEnabledOnUser: boolean;
  underlyingAsset: string;
  showModal: boolean;
  user: UserSummary | undefined;
  userReserve: ComputedUserReserve;
  poolReserve: ComputedReserveData;
  asCollateral: boolean;
};

export type DepositModalData = {
  showModal: boolean;
  currencySymbol: string;
  poolReserve: ComputedReserveData;
  history: any;
};

export type WithdrawModalData = {
  showModal: boolean;
  currencySymbol: string;
  poolReserve: ComputedReserveData;
  history: any;
  userReserve?: ComputedUserReserve;
  user?: UserSummary;
};

export type BorrowModalData = {
  showModal: boolean;
  poolReserve: ComputedReserveData;
  userReserve?: ComputedUserReserve;
  user?: UserSummary;
  currencySymbol: string;
  history: any;
};

export type RepayModalData = {
  showModal: boolean;
  poolReserve: ComputedReserveData;
  userReserve?: ComputedUserReserve;
  user?: UserSummary;
  currencySymbol: string;
  history: any;
  location: any;
};

export type DepositTableItem = {
  onToggleSwitch: () => void;
  onDeposit: () => void;
  onWithdraw: () => void;
  isActive: boolean;
  isFrozen: boolean;
  usageAsCollateralEnabledOnThePool: boolean;
  uiColor: string;
  reserve: Pick<RawReserveData, 'id' | 'symbol' | 'name' | 'liquidityRate' | 'underlyingAsset'>;
  avg30DaysLiquidityRate?: string;
  aincentivesAPR: string;
  borrowingEnabled: boolean;
  collateralModalData: CollateralModalData;
  depositModalData: DepositModalData;
  withdrawModalData: WithdrawModalData;
  index?: number;
  depositAPY?: number;
} & Pick<
  ComputedUserReserve,
  'usageAsCollateralEnabledOnUser' | 'underlyingBalance' | 'underlyingBalanceUSD'
>;
