import { FC, useEffect, useState } from 'react';
import { ICountryData } from '../../types/types';
import './index.scss';

const CardCountrie: FC<ICountryData> = ({
  flags,
  name,
  languages,
  population,
}) => {
  const [langueges, setLaungueges] = useState<string[]>([]);

  useEffect(() => {
    if (languages) {
      const allLangueges: string[] = Object.values(languages);
      setLaungueges(allLangueges);
    }
  }, [languages]);

  return (
    <div className="wrapperItem" >
      <img src={flags.png} alt={name.official} />
      <h2>{name.official}</h2>
      <div className="langueges">
        <h2>Langueges:</h2>
        <span key={langueges[0]}>
          {langueges.map((el) => (
            <p>{el}.</p>
          ))}
        </span>
      </div>
      <div className="langueges">
        <h2>Population:</h2>
        <span>
          <p>{population} peoples</p>
        </span>
      </div>
    </div>
  );
};

export default CardCountrie;
