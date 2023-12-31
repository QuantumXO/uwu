import { ReactNode } from 'react';
import { useIntl, MessageDescriptor } from 'react-intl';
import classNames from 'classnames';

import BasicTableBorrow from '../BasicTableBorrow';
import TableHeaderBorrowWrapper from './TableHeaderBorrowWrapper';
import TableColumn from '../BasicTable/TableColumn';
import TableHeaderButton from '../BasicTable/TableHeaderButton';

import staticStyles from './style';

type BasicAssetsTableColumn = {
  title: MessageDescriptor;
  subtitle?: MessageDescriptor;
  sortKey?: string;
};

interface BasicAssetsTableProps {
  columns: BasicAssetsTableColumn[];
  children: ReactNode;
  className?: string;
  sortName?: string;
  setSortName?: (value: string) => void;
  sortDesc?: boolean;
  setSortDesc?: (value: boolean) => void;
}

export default function BasicAssetsTable({
  columns,
  children,
  className,
  sortName,
  setSortName,
  sortDesc,
  setSortDesc,
}: BasicAssetsTableProps) {
  const intl = useIntl();

  return (
    <BasicTableBorrow
      className={classNames('BasicAssetsTable', className)}
      headerColumns={
        <TableHeaderBorrowWrapper>
          {columns.map((column, index) => (
            <TableColumn key={index}>
              <TableHeaderButton
                title={intl.formatMessage(column.title)}
                subTitle={column.subtitle ? `(${intl.formatMessage(column.subtitle)})` : undefined}
                sortKey={column.sortKey}
                withSorting={!!column.sortKey}
                sortName={sortName}
                setSortName={setSortName}
                sortDesc={sortDesc}
                setSortDesc={setSortDesc}
                className="BasicAssetsTable__title"
              />
            </TableColumn>
          ))}
        </TableHeaderBorrowWrapper>
      }
    >
      {children}

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
    </BasicTableBorrow>
  );
}
