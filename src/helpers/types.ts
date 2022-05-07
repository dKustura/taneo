import { SvgIconComponent } from '@mui/icons-material';
import { FlagComponent } from 'country-flag-icons/react/3x2';

export interface AppRoute {
  readonly title: string;
  readonly path: string;
  readonly icon?: SvgIconComponent;
}

// Climate parameters
export enum ClimateVariable {
  Temperature = 'tas',
  Precipitation = 'pr',
}

export enum Measure {
  MonthlyAverage = 'mavg',
  AnnualAverage = 'annualavg',
}

// Time period
export interface TimePeriod {
  readonly startYear: number;
  readonly endYear: number;
}

// Country
export enum CountryCode {
  Croatia = 'HRV',
  Slovenia = 'SVN',
  Macedonia = 'MKD',
  Serbia = 'SRB',
  BosniaAndHerzegovina = 'BIH',
  Montenegro = 'MNE',
  Yugoslavia = 'YUG',
}

export interface RegularCountry {
  readonly name: string;
  readonly code: CountryCode;
  readonly flagIcon: FlagComponent;
}

export interface CountryUnion extends RegularCountry {
  readonly memberCountries: CountryCode[];
}

export type Country = RegularCountry | CountryUnion;

// Filter
export interface FilterData {
  readonly country: Country;
  readonly timePeriod: TimePeriod;
  readonly climateVariable: ClimateVariable;
}

export interface FilterChangeHandlers {
  onCountryChange: (newCountry: Country) => void;
  onTimePeriodChange: (newTimePeriod: TimePeriod) => void;
  onClimateVariableChange: (newClimateVariable: ClimateVariable) => void;
}
