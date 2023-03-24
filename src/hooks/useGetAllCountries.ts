import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICountryData } from '../types/types';

const useGetAllCountries = () => {
  const [countries, setCountries] = useState<ICountryData[]>([]);

  const getCountriesData = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  };

  useEffect(() => getCountriesData(), []);

  return {
    countries,
  };
};

export default useGetAllCountries;
