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

import colors from 'components/Theme/colors';
import { MonthlyAverageData } from 'api/models';

import { MONTHS } from 'helpers/constants';
import { ClimateVariable } from 'helpers/types';
import { getGCMDisplayName } from 'helpers/dataDisplay';
import globalStyles from 'globalStyles';

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
                      : colors.blue200,
                  })}
                >
                  <TableCell>
                    <Typography sx={globalStyles.boldText}>
                      {getGCMDisplayName(gcmData.gcm)}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ width: '50%' }}>
                    <Typography sx={globalStyles.boldText}>Month</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={globalStyles.boldText}>Value</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {MONTHS.map((month, index) => (
                  <TableRow key={month}>
                    <TableCell>
                      <Typography sx={globalStyles.boldText}>{month}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{gcmData.monthVals[index]}</Typography>
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
