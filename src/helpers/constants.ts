import {
  BarChart as BarChartIcon,
  TableChart as TableChartIcon,
} from '@mui/icons-material';

import { AppRoute, Country, CountryCode, TimePeriod } from './types';

export const APP_NAME = 'Taneo';

export const RoutePaths = {
  TABLE: '/table',
  CHART: '/chart',
};

export const AppRoutes: AppRoute[] = [
  {
    title: 'Table',
    path: RoutePaths.TABLE,
    icon: TableChartIcon,
  },
  {
    title: 'Chart',
    path: RoutePaths.CHART,
    icon: BarChartIcon,
  },
];

export const TIME_PERIODS: TimePeriod[] = [
  {
    startYear: 2020,
    endYear: 2039,
  },
  {
    startYear: 2040,
    endYear: 2059,
  },
  {
    startYear: 2060,
    endYear: 2079,
  },
  {
    startYear: 2080,
    endYear: 2099,
  },
];

export const COUNTRIES: Country[] = [
  {
    name: 'Croatia',
    code: CountryCode.Croatia,
  },
  {
    name: 'Slovenia',
    code: CountryCode.Slovenia,
  },
  {
    name: 'Serbia',
    code: CountryCode.Serbia,
  },
  {
    name: 'Bosnia & Herzegovina',
    code: CountryCode.BosniaAndHerzegovina,
  },
  {
    name: 'Montenegro',
    code: CountryCode.Montenegro,
  },
  {
    name: 'Macedonia',
    code: CountryCode.Montenegro,
  },
  {
    name: 'Yugoslavia',
    code: CountryCode.Yugoslavia,
    memberCountries: [
      CountryCode.Croatia,
      CountryCode.Slovenia,
      CountryCode.Serbia,
      CountryCode.BosniaAndHerzegovina,
      CountryCode.Montenegro,
      CountryCode.Macedonia,
    ],
  },
];
