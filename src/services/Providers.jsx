import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import indeedTheme from "@/theme/indeedTheme";
import { store } from "@/store";
import { Provider as ReactReduxProvider } from "react-redux";

function Providers({ children }) {
  return (
    <ReactReduxProvider store={store}>
      <MaterialThemeProvider theme={indeedTheme}>
        {children}
      </MaterialThemeProvider>
      ;
    </ReactReduxProvider>
  );
}

export default Providers;
