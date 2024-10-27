import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import AppRoutes from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
