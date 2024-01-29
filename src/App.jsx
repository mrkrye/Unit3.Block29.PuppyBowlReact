import "./App.css";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Form from "./components/Form";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <>
      <div id="container">
        <Header />
        <div id="main-section">
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/players"} element={<AllPlayers />} />
            <Route path={"/players/:id"} element={<SinglePlayer />} />
            <Route path={"/players/form"} element={<Form />} />
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
