import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState([]);

  const testi = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => setCountries(res.data));
  };

  useEffect(() => {
    testi();
  }, []);

  console.log(countries);
  interface ICountyData {
    name: {
      official: string;
    };
    flags: {
      png: string;
    };
  }
  return (
    <div className="App">
      {countries.map((countrie: ICountyData) => (
        <div key={countrie.name.official}>
          <p>{countrie.name.official}</p>
          <img src={countrie.flags.png} alt={countrie.name.official} />
        </div>
      ))}
    </div>
  );
}

export default App;
