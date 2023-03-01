import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        h1: {
            fontSize: 64,
            lineHeight: '80px',
            fontWeight: 800,
        },
        h2: {
            fontSize: 48,
            lineHeight: '64px',
            fontWeight: 800,
        },
        h3: {
            fontSize: 32,
            lineHeight: '48px',
            fontWeight: 800,
        },
        h4: {
            fontSize: 24,
            lineHeight: '36px',
            fontWeight: 700,
        },
        h5: {
            fontSize: 20,
            lineHeight: '30px',
            fontWeight: 600,
        },
        h6: {
            fontSize: 18,
            lineHeight: '28px',
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '24px',
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '22px',
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '24px',
        },
        body2: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '22px',
        },
    },
    components: {
        // MuiPaper: {
        //     styleOverrides: {
        //         root: {
        //             backgroundColor: 'rgb(255, 255, 255)',
        //             color: 'rgb(33, 43, 54)',
        //             transition: ' box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        //             backgroundImage: 'none',
        //             overflow: 'hidden',
        //             position: 'relative',
        //             boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
        //             borderRadius: '16px',
        //             zIndex: 0,
        //             padding: '24px',
        //         },
        //     },
        // },
        MuiSnackbar: {
            defaultProps: {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                onClose: () => {},
            },
        },
        MuiAlert: {
            defaultProps: {
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                onClose: () => {},
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    fontWeight: 700,
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {},
    },

    palette: {
        primary: {
            lighter: '#C8FACD',
            light: '#5BE584',
            main: '#00AB55',
            dark: '#007B55',
            darker: '#005249',
            contrastText: '#fff',
        },
        secondary: {
            lighter: '#D6E4FF',
            light: '#84A9FF',
            main: '#3366FF',
            dark: '#1939B7',
            darker: '#091A7A',
            contrastText: '#fff',
        },
        info: {
            lighter: '#CAFDF5',
            light: '#61F3F3',
            main: '#00B8D9',
            dark: '#006C9C',
            darker: '#003768',
            contrastText: 'fff',
        },
        success: {
            lighter: '#D8FBDE',
            light: '#86E8AB',
            main: '#36B37E',
            dark: '#1B806A',
            darker: '#0A5554',
            contrastText: '#fff',
        },
        warning: {
            lighter: '#FFE9D5',
            light: '#FFD666',
            main: '#FFAB00',
            dark: '#B76E00',
            darker: '#7A4100',
            contrastText: '#fff',
        },
        error: {
            lighter: '#FFE9D5',
            light: '#FFAC82',
            main: '#FF5630',
            dark: '#B71D18',
            darker: '#7A0916',
            contrastText: '#fff',
        },
        grey: {
            100: '#F9FAFB',
            200: '#F4F6F8',
            300: '#DFE3E8',
            400: '#C4CDD5',
            500: '#919EAB',
            600: '#637381',
            700: '#637381',
            800: '#212B36',
            900: '#161C24',
        },
    },
});
