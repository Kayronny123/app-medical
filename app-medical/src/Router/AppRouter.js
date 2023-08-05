import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Schedules from "../pages/Schedules/Schedules";
import SearchSchedules from "../pages/SearchSchedules/SearchSchedules";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/agendamento" element={<Schedules />} />
        <Route path="/pesquisa/" element={<SearchSchedules />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
