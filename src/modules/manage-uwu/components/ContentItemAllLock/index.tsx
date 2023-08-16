import { useState } from 'react';
import { BigNumber, valueToBigNumber } from '@aave/protocol-js';

import DefaultButton from '../../../../components/basic/DefaultButton';
import LockConfirmation from '../LockConfirmation';
import staticStyles from './style';

interface ContentItemAllLockProps {
  apr: number;
  maxAmount: string;
  walletBalance: BigNumber;
  onMainTxConfirmed: () => void;
}

function ContentItemAllLock({
  apr,
  maxAmount,
  walletBalance,
  onMainTxConfirmed,
}: ContentItemAllLockProps) {
  const [amount, setAmount] = useState<BigNumber | null>(null);

  return (
    <>
      <div className="ManageRadiant__content-all-lock">
        <h3>
          Lock the UwU in your wallet now to start earning
          {/*<span>*/}
          {/*  {`${*/}
          {/*    apr >= 10.0*/}
          {/*      ? Math.round(apr * 100).toLocaleString()*/}
          {/*      : (Math.round(apr * 10000) / 100).toLocaleString()*/}
          {/*  }%`}*/}
          {/*</span>*/}
        </h3>

        {!!amount ? (
          <LockConfirmation
            amount={amount}
            maxAmount={valueToBigNumber(maxAmount)}
            onMainTxConfirmed={onMainTxConfirmed}
            onAfterSuccessClick={() => {
              setAmount(null);
            }}
          />
        ) : (
          <div className="button-container">
            <DefaultButton
              title="Lock Now"
              mobileBig={true}
              size="medium"
              disabled={!Number(walletBalance)}
              onClick={() => setAmount(new BigNumber(walletBalance))}
              color="dark"
            />
          </div>
        )}
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </>
  );
}

export default ContentItemAllLock;
