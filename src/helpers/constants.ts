import { BarChart as BarChartIcon, TableChart as TableChartIcon } from '@mui/icons-material';
import { FLAGS } from './flags';

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
    flagIcon: FLAGS.Croatia,
  },
  {
    name: 'Slovenia',
    code: CountryCode.Slovenia,
    flagIcon: FLAGS.Slovenia,
  },
  {
    name: 'Serbia',
    code: CountryCode.Serbia,
    flagIcon: FLAGS.Serbia,
  },
  {
    name: 'Bosnia & Herzegovina',
    code: CountryCode.BosniaAndHerzegovina,
    flagIcon: FLAGS.BosniaAndHerzegovina,
  },
  {
    name: 'Montenegro',
    code: CountryCode.Montenegro,
    flagIcon: FLAGS.Montenegro,
  },
  {
    name: 'Macedonia',
    code: CountryCode.Macedonia,
    flagIcon: FLAGS.Macedonia,
  },
  {
    name: 'Yugoslavia',
    code: CountryCode.Yugoslavia,
    flagIcon: FLAGS.Yugoslavia,
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

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const GCM_DISPLAY_NAMES: { [gcm: string]: string } = {
  'access1-0': 'ACCESSS1.0',
  'bnu-esm': 'BNU-ESMU-ESM',
  canesm2: 'CANESM2',
  'csiro-mk3-6-0': 'CSIRO-MK3.6.0',
  'gfdl-cm3': 'GFDL-CM3',
  'hadgem2-ao': 'HADGEM-AO',
  'ipsl-cm5a-mr': 'IPSL-CM5A-MR',
  miroc5: 'MIROC5',
  'mri-cgcm3': 'MRI-CGCM3',
  'noresm1-m': 'NORESM1-M',
};

export const MAX_GCM_NAME_LENGTH = 12;
