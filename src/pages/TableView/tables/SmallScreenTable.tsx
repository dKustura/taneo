import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { MonthlyAverageData } from 'api/models';

import { MONTHS } from 'helpers/constants';
import { ClimateVariable } from 'helpers/types';
import { getDisplayNameForGCM } from 'helpers/dataDisplay';

import globalStyles from 'globalStyles';
import styles from './styles';

type Props = {
  readonly data: MonthlyAverageData[];
  readonly climateVariable: ClimateVariable;
};

const SmallScreenTable = ({ data, climateVariable }: Props) => {
  const isTemperatureVariable = climateVariable === ClimateVariable.Temperature;

  return (
    <>
      {data.map((gcmData) => (
        <Box key={gcmData.gcm} sx={{ p: 4 }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow
                  sx={(theme) => ({
                    backgroundColor: isTemperatureVariable
                      ? theme.palette.secondary.main
                      : theme.palette.primary.main,
                  })}
                >
                  <TableCell colSpan={2} align="center" sx={styles.smallHeaderCell}>
                    <Typography sx={globalStyles.boldText}>
                      {getDisplayNameForGCM(gcmData.gcm)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {MONTHS.map((month, index) => (
                  <TableRow key={month} hover>
                    <TableCell align="center">
                      <Typography sx={globalStyles.boldText}>{month}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>{Number(gcmData.monthVals[index]).toFixed(2)}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </>
  );
};

export default SmallScreenTable;
