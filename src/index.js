import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
// import { SnackbarProvider } from './components/Snackbar';
import { SnackbarProvider } from './components/Snackbar';
import { LoadingProvider } from './context/LoadingContext';
import store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <LoadingProvider>
                        <SnackbarProvider>
                            <App />
                        </SnackbarProvider>
                    </LoadingProvider>
                </Provider>
            </Router>
        </ThemeProvider>
    </GlobalStyles>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
