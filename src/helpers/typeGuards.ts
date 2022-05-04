import { Country, CountryUnion } from './types';

export const isCountryUnion = (country: Country): country is CountryUnion => {
  return (country as CountryUnion).memberCountries !== undefined;
};
