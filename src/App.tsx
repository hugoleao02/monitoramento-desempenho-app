import AuthProvider from "./provider/AuthProvider";
import AppRoutes from "./routes/routes";
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
