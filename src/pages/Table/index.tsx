import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { FilterData } from 'helpers/types';
import useTableData from './useTableData';

type Props = {
  readonly filter: FilterData;
};

const TableView = ({ filter }: Props) => {
  const { data, addData, isError, isLoading } = useTableData(filter);

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(error.message);
  //   }
  // }, [error.message, isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>TableView</div>;
};

export default TableView;
