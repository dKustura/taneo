import {
  Autocomplete,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import {
  ClimateVariable,
  Country,
  FilterChangeHandlers,
  FilterData,
  TimePeriod,
} from 'helpers/types';
import { COUNTRIES, TIME_PERIODS } from 'helpers/constants';

type Props = {
  readonly data: FilterData;
  readonly onChangeHandlers: FilterChangeHandlers;
};

const Filter = ({ data, onChangeHandlers }: Props) => {
  const { country, timePeriod, climateVariable } = data;

  const onCountryChange = (_: React.SyntheticEvent, country: Country) =>
    onChangeHandlers.onCountryChange(country);

  const onTimePeriodChange = (
    _: React.SyntheticEvent,
    timePeriod: TimePeriod,
  ) => onChangeHandlers.onTimePeriodChange(timePeriod);

  const onClimateVariableChange = (
    _: React.MouseEvent<HTMLElement>,
    climateVariable: ClimateVariable,
  ) => {
    if (!climateVariable) return;
    onChangeHandlers.onClimateVariableChange(climateVariable);
  };

  const getTimePeriodLabel = (timePeriod: TimePeriod) =>
    `${timePeriod.startYear}-${timePeriod.endYear}`;

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Autocomplete
          value={country}
          getOptionLabel={(country) => country.name}
          disableClearable
          onChange={onCountryChange}
          options={COUNTRIES}
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

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ToggleButtonGroup
          color="primary"
          value={climateVariable}
          exclusive
          onChange={onClimateVariableChange}
        >
          {Object.entries(ClimateVariable).map(([name, value]) => (
            <ToggleButton key={value} value={value}>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default Filter;
