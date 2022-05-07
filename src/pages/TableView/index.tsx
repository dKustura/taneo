import { useState } from 'react';
import { Grid } from '@mui/material';

import LoadingIndicator from 'components/LoadingIndicator';
import ErrorMessage from 'components/ErrorMessage';
import NewEntryButton from 'components/NewEntryButton';
import MonthlyDataInputForm from 'components/MonthlyDataInputForm';
import SmallScreenTable from './tables/SmallScreenTable';
import BigScreenTable from './tables/BigScreenTable';

import useTableData from './useTableData';
import { useIsScreenSizeDown } from 'hooks/useScreenSize';
import { FilterData } from 'helpers/types';

type Props = {
  readonly filter: FilterData;
};

const TableView = ({ filter }: Props) => {
  const { data, addData, isError, isLoading } = useTableData(filter);
  const [isAddDataDialogOpen, setIsAddDataDialogOpen] = useState(false);
  const isSmallScreen = useIsScreenSizeDown('md');

  const onAddDataButtonClick = () => {
    setIsAddDataDialogOpen(true);
  };

  const onAddDataDialogClose = () => {
    setIsAddDataDialogOpen(false);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Grid container justifyContent="flex-end" sx={{ pt: 2 }}>
        <Grid item xs={12} sm={3} md={2} xl={1}>
          <NewEntryButton onClick={onAddDataButtonClick} />
        </Grid>
      </Grid>
      <MonthlyDataInputForm
        isOpen={isAddDataDialogOpen}
        onClose={onAddDataDialogClose}
        onSubmit={addData}
      />

      <Grid container justifyContent="center" sx={{ pt: 2 }}>
        {isSmallScreen ? (
          <Grid item xs={12}>
            <SmallScreenTable data={data} climateVariable={filter.climateVariable} />
          </Grid>
        ) : (
          <Grid item md={12} lg={10} xl={8} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <BigScreenTable data={data} climateVariable={filter.climateVariable} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default TableView;
