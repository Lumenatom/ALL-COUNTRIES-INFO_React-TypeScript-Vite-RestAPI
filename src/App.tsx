import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import ViewFullInfoCountrie from "./components/ViewFullInfoCountrie/ViewFullInfoCountrie";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <BrowserRouter basename='/All_Countries_Info'>
      <Routes>
        <Route path={"/"} element={<Countries />} />
        <Route
          path={"/countrie/:nameCountrie"}
          element={<ViewFullInfoCountrie />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
