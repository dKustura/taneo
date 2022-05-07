import { Autocomplete, Box, Grid, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Thermostat as ThermostatIcon, Opacity as OpacityIcon } from '@mui/icons-material';

import {
  ClimateVariable,
  Country,
  FilterChangeHandlers,
  FilterData,
  TimePeriod,
} from 'helpers/types';
import { COUNTRIES, TIME_PERIODS } from 'helpers/constants';
import styles from './styles';

type Props = {
  readonly data: FilterData;
  readonly onChangeHandlers: FilterChangeHandlers;
};

const Filter = ({ data, onChangeHandlers }: Props) => {
  const { country, timePeriod, climateVariable } = data;

  const onCountryChange = (_: React.SyntheticEvent, country: Country) =>
    onChangeHandlers.onCountryChange(country);

  const onTimePeriodChange = (_: React.SyntheticEvent, timePeriod: TimePeriod) =>
    onChangeHandlers.onTimePeriodChange(timePeriod);

  const onClimateVariableChange = (
    _: React.MouseEvent<HTMLElement>,
    climateVariable: ClimateVariable
  ) => {
    if (!climateVariable) return;
    onChangeHandlers.onClimateVariableChange(climateVariable);
  };

  const getTimePeriodLabel = (timePeriod: TimePeriod) =>
    `${timePeriod.startYear} - ${timePeriod.endYear}`;

  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Box display="flex" flexGrow={1}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Autocomplete
              value={country}
              getOptionLabel={(country) => country.name}
              disableClearable
              onChange={onCountryChange}
              options={COUNTRIES}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Grid container alignItems="center">
                    <Grid item sx={{ width: '2rem', pr: 1 }}>
                      <option.flagIcon style={{ display: 'block', margin: 'auto' }} />
                    </Grid>
                    <Grid item>{option.name}</Grid>
                  </Grid>
                </Box>
              )}
              renderInput={(params) => <TextField {...params} label="Country" />}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Autocomplete
              value={timePeriod}
              getOptionLabel={getTimePeriodLabel}
              disableClearable
              onChange={onTimePeriodChange}
              options={TIME_PERIODS}
              renderInput={(params) => <TextField {...params} label="Period" />}
            />
          </Grid>
        </Grid>
      </Box>

      <Grid item xs={12} sm={5} md={3} xl={2} sx={styles.variableButton}>
        <ToggleButtonGroup
          fullWidth
          color="primary"
          value={climateVariable}
          exclusive
          onChange={onClimateVariableChange}
        >
          <ToggleButton color="secondary" value={ClimateVariable.Temperature}>
            Temperature
            <ThermostatIcon />
          </ToggleButton>
          <ToggleButton color="primary" value={ClimateVariable.Precipitation}>
            Precipitation
            <OpacityIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Filter;
