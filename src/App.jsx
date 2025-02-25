import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";
import TemplatesPage from "./Pages.jsx/TemplatesPage";
import NotesPage from "./Pages.jsx/NotesPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<NotesPage replace to="notes" />}></Route>
            <Route path="notes" element={<NotesPage />}></Route>
            <Route path="templates" element={<TemplatesPage />}></Route>
          </Route>
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1500,
              style: {
                backgroundColor: "var(--green-50)",
                color: "var(--green-700)",
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
              },
            },
            error: {
              duration: 3000,
              style: {
                backgroundColor: "var(--red-50)",
                color: "var(--red-700)",
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
              },
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
