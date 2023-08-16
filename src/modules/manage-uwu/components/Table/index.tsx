import { useIntl } from 'react-intl';

import GradientLine from '../../../../components/basic/GradientLine';
import staticStyles from './style';

interface TableProps {
  title: string;
  value?: string;
  action?: string;
  table?: { amount: string; expiryDate: Date }[];
}

export function Table({ title, value = '', action = 'Vesting', table = [] }: TableProps) {
  const intl = useIntl();

  return (
    <>
      <div className="Table">
        {!!table.length && (
          <div className="Table__header">
            <div className="Table__header-column">Amount</div>
            <div className="Table__header-column">Expiry</div>
          </div>
        )}

        {!!table.length && <GradientLine />}
        <div className="Table__body">
          {table.map((record) => (
            <div className="Table__row" key={record.expiryDate.toLocaleString('en-GB')}>
              <div className="Table__column">
                <strong>
                  {intl.formatNumber(parseFloat(record.amount), {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </strong>{' '}
              </div>
              <div className="Table__column">{record.expiryDate.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </>
  );
}
