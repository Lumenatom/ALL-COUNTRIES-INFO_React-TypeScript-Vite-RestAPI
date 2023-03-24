import { useState } from 'react';
import useGetAllCountries from '../../hooks/useGetAllCountries';
import { ICountryData } from '../../types/types';
import CardCountries from '../CardCountrie';
import './index.scss';

const Countries = () => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const { countries } = useGetAllCountries();

  const findCountrie = (): ICountryData[] => {
    return countries.filter(({ name }) =>
      name.official.toLowerCase().includes(valueSearch.toLowerCase())
    );
  };

  console.log(countries);

  return (
        <div className="main">
          <input
            type="text"
            onChange={(e) => setValueSearch(e.target.value)}
            placeholder="Enter name countrie"
          />
          <div className="WrapperCountries">
            {findCountrie().map((countrie: ICountryData) => (
              <CardCountries
                key={countrie.name.official}
                {...countrie}
              />
            ))}
          </div>
        </div>
  );
};

export default Countries;
