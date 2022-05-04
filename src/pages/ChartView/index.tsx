import { Grid, useTheme } from '@mui/material';
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from 'recharts';
import ResponsiveContainer from 'components/ResponsiveContainer';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorMessage from 'components/ErrorMessage';

import useChartData from './useChartData';
import { useIsScreenSizeDown } from 'hooks/useScreenSize';

import { ClimateVariable, FilterData } from 'helpers/types';
import { getMinMax, getPrecipitationColor, getTemperatureColor } from 'helpers/dataDisplay';

type Props = {
  readonly filter: FilterData;
};

const ChartView = ({ filter }: Props) => {
  const { data, addData, isError, isLoading } = useChartData(filter);
  const theme = useTheme();
  const isSmallScreen = useIsScreenSizeDown('sm');

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  const isTemperatureVariable = filter.climateVariable === ClimateVariable.Temperature;
  const getColor = isTemperatureVariable ? getTemperatureColor : getPrecipitationColor;
  const { min, max } = getMinMax(data.map((d) => d.value));

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8} sx={{ pt: 8, px: 2, height: '60vh' }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="key"
                height={90}
                interval={0}
                textAnchor="end"
                tick={{ fontSize: isSmallScreen ? '0.7rem' : '0.9rem' }}
                angle={isSmallScreen ? -50 : -30}
              />
              <YAxis />
              <Tooltip
                cursor={{ fill: theme.palette.primary.light, opacity: 0.2 }}
                formatter={(value: number) => value.toFixed(2)}
              />
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getColor(min, max, entry.value)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default ChartView;
