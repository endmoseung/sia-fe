import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LabelCreate from "../pages/LabelCreate/LabelCreate";
import LabelSelect from "../pages/LabelSelect/LabelSelect";
import MainPage from "../pages/MainPage/MainPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/labelcreate" element={<LabelCreate />} />
          <Route path="/labelselect" element={<LabelSelect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
