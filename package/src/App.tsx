import { RouterProvider } from "react-router";
import { ThemeProvider } from './components/theme-provider';
import router from "./routes/Router";


function App() {

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="spike-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
