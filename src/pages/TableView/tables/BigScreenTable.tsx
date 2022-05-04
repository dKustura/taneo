import {
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

const BigScreenTable = ({ data, climateVariable }: Props) => {
  const isTemperatureVariable = climateVariable === ClimateVariable.Temperature;

  return (
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
            <TableCell sx={styles.bigGcmHeaderCell}>
              <Typography sx={globalStyles.boldText}>GCM</Typography>
            </TableCell>
            {MONTHS.map((month) => (
              <TableCell key={month} sx={styles.bigMonthHeaderCell}>
                <Typography sx={globalStyles.boldText}>{month}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((gcmData) => (
            <TableRow key={gcmData.gcm} hover>
              <TableCell>
                <Typography sx={globalStyles.boldText}>
                  {getDisplayNameForGCM(gcmData.gcm)}
                </Typography>
              </TableCell>

              {gcmData.monthVals.map((monthValue, index) => (
                <TableCell key={`${MONTHS[index]}-value`}>
                  {Number(monthValue).toFixed(2)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BigScreenTable;
