import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TagScan from "./pages/TagScan";
import RetrieveScan from "./pages/RetrieveScan";
import BagDetails from "./pages/BagDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tag-scan" element={<TagScan />} />
        <Route path="/retrieve-scan" element={<RetrieveScan />} />
        <Route path="/bag-details" element={<BagDetails />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
