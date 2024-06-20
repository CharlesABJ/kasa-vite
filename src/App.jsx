import "@styles/App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@pages/Layout";
import Home from "@pages/Home/Home";
import About from "@pages/About/About";
import Error404 from "@pages/Error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
