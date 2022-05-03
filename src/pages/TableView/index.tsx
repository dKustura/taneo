import useTableData from './useTableData';
import { Grid } from '@mui/material';
import SmallScreenTable from './SmallScreenTable';
import BigScreenTable from './BigScreenTable';
import ErrorMessage from 'components/ErrorMessage';
import { useIsScreenSizeDown } from 'hooks/ScreenSize';

import { FilterData } from 'helpers/types';

type Props = {
  readonly filter: FilterData;
};

// TODO: change color when Temperature table is shown to red

const TableView = ({ filter }: Props) => {
  const { data, addData, isError, isLoading } = useTableData(filter);
  const isSmallScreen = useIsScreenSizeDown('sm');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Grid container justifyContent="center" sx={{ pt: 8 }}>
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
  );
};

export default TableView;
