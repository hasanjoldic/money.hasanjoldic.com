import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@hasan.joldic/theme";

import { ReceiptDetail, Receipts } from "./pages";

const Root: React.FC = () => {
  return (
    <ThemeProvider themeOptions={{}}>
      <div style={{ minHeight: "100vh", padding: 50 }}>
        <Routes>
          <Route path="/" element={<Receipts />} />
          <Route path="/receipt/:id" element={<ReceiptDetail />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default Root;
