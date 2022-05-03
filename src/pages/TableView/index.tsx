import useTableData from './useTableData';
import { Grid } from '@mui/material';

import SmallScreenTable from './tables/SmallScreenTable';
import BigScreenTable from './tables/BigScreenTable';
import ErrorMessage from 'components/ErrorMessage';
import LoadingIndicator from 'components/LoadingIndicator';

import { useIsScreenSizeDown } from 'hooks/useScreenSize';
import { FilterData } from 'helpers/types';

type Props = {
  readonly filter: FilterData;
};

const TableView = ({ filter }: Props) => {
  const { data, addData, isError, isLoading } = useTableData(filter);
  const isSmallScreen = useIsScreenSizeDown('md');

  if (isLoading) {
    return <LoadingIndicator />;
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
