import React from 'react';
import { useIntl } from 'react-intl';
import queryString from 'query-string';
import { BigNumber, InterestRate } from '@aave/protocol-js';

import BasicForm from '../../../../components/forms/BasicForm';
import routeParamValidationHOC, {
  ValidationWrapperComponentProps,
} from '../../../../components/RouteParamsValidationWrapper';

import { useTxBuilderContext } from '../../../../libs/tx-provider';
import messages from './messages';
import { useProtocolDataContext } from '../../../../libs/protocol-data-provider';

function RepayAmount({
  currencySymbol,
  userReserve,
  poolReserve,
  walletBalance,
  history,
  location,
}: ValidationWrapperComponentProps) {
  const intl = useIntl();
  const { networkConfig } = useProtocolDataContext();
  const { lendingPool } = useTxBuilderContext();
  const query = queryString.parse(location.search);
  const debtType = query.debtType || InterestRate.Variable;

  if (!userReserve) {
    throw new Error(intl.formatMessage(messages.error));
  }

  // keep it for gas cost
  const normalizedWalletBalance = walletBalance.minus(
    userReserve.reserve.symbol.toUpperCase() === networkConfig.baseAsset ? '0.004' : '0'
  );

  const maxAmountToRepay = BigNumber.min(
    normalizedWalletBalance,
    debtType === InterestRate.Stable ? userReserve.stableBorrows : userReserve.variableBorrows
  );

  const handleSubmit = (amount: string, max?: boolean) => {
    const query = queryString.stringify({ debtType, amount: max ? '-1' : amount });
    history.push(`${history.location.pathname}confirmation?${query}`);
  };

  const handleGetTransactions = (userId: string) => async () =>
    await lendingPool.repay({
      user: userId,
      reserve: poolReserve.underlyingAsset,
      amount: '-1',
      interestRateMode: debtType as InterestRate,
    });
  return (
    <>
      <BasicForm
        title="Repay"
        description="How much do you want to repay?"
        maxAmount={maxAmountToRepay.toString(10)}
        amountFieldTitle={intl.formatMessage(messages.amountTitle)}
        currencySymbol={currencySymbol}
        onSubmit={handleSubmit}
        absoluteMaximum={true}
        maxDecimals={poolReserve.decimals}
        getTransactionData={handleGetTransactions}
        poolReserve={poolReserve}
      />
    </>
  );
}

export default routeParamValidationHOC({
  withWalletBalance: true,
  withUserReserve: true,
})(RepayAmount);
