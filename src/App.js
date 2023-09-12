
import HomePage from "./Pages/HomePage";

// MUI
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

function App() {

  let theme = createTheme({
    typography: {
      fontFamily: 'Cubano, Arial, sans-serif',
    }
  })

  theme = responsiveFontSizes(theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </div>
  )
}

export default App;
