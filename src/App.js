import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import POSPage from "./pages/POSPage";
import ContainerOutletWidget from "./widgets/commons/ContainerOutletWidget";
import POSPrintPage from "./pages/POSPrintPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerOutletWidget />}>
          <Route index element={<LoginPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/pos/print" element={<POSPrintPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
