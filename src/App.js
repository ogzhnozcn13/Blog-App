import CssBaseline from "@mui/material/CssBaseline";
import AppRouter from "./routers/AppRouter";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { blueGrey, grey, pink } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:pink["900"]
      },
      secondary:{
        main:grey["900"]
      }
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>
    </>
  );
}
export default App;
