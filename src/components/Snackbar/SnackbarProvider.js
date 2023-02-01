import { SnackbarProvider } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

const Snackbar = ({ children }) => {
    const action = (snackbarId) => <CloseIcon></CloseIcon>;

    return (
        <SnackbarProvider
            action={action}
            autoHideDuration={3000}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            {children}
        </SnackbarProvider>
    );
};

export default Snackbar;
