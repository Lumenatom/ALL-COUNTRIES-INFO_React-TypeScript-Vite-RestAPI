import { FC, useEffect, useState } from "react";
import { CountryData } from "../../types/types";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const CardCountrie: FC<CountryData> = (countrie) => {
  const { flags, name, languages, population } = countrie;
  const [langueges, setLaungueges] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (languages) {
      const allLangueges: string[] = Object.values(languages);
      setLaungueges(allLangueges);
    }
  }, [languages]);

  const handleNavigate = (): void => {
    navigate(`/countrie/${countrie.name.official}`, { state: countrie });
  };
  return (
    <div className="wrapperItem" onClick={handleNavigate}>
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
