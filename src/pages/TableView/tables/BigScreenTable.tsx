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

import colors from 'components/Theme/colors';
import { MonthlyAverageData } from 'api/models';

import { MONTHS } from 'helpers/constants';
import { ClimateVariable } from 'helpers/types';
import { getDisplayNameForGCM } from 'helpers/dataDisplay';
import globalStyles from 'globalStyles';

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
                : colors.blue200,
            })}
          >
            <TableCell sx={{ width: '10%' }}>
              <Typography sx={globalStyles.boldText}>GCM</Typography>
            </TableCell>
            {MONTHS.map((month) => (
              <TableCell key={month} sx={{ width: '7%' }}>
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
                <TableCell key={`${MONTHS[index]}-value`}>{monthValue.toFixed(2)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BigScreenTable;
