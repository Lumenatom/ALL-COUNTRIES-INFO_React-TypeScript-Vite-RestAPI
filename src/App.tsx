import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import ViewFullInfoCountrie from "./components/ViewFullInfoCountrie/ViewFullInfoCountrie";

function App() {
  return (
    <BrowserRouter>
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
