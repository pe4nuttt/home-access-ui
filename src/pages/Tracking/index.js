import MaterialReactTable from 'material-react-table';
import classNames from 'classnames/bind';
import {
    Box,
    Typography,
    Grid,
    Button,
    Input,
    InputLabel,
    OutlinedInput,
    TextField,
    MenuItem,
    styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomCloseButton from '@/components/Snackbar/components/CustomCloseButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StyledPaper } from '@/components/Layout/components/Paper';
import { useSnackbar } from 'notistack';
import { useMemo } from 'react';
import { useLoading } from '@/context/LoadingContext';
import Layout from '@/components/Layout';
import styles from './Tracking.module.scss';

const cx = classNames.bind(styles);

const typeOptions = [
    {
        value: 1,
        label: 'Door open',
    },
    {
        value: 1,
        label: 'Incoming call',
    },
];

const statusOptions = [
    {
        value: 1,
        label: 'Declined',
    },
    {
        value: 2,
        label: 'Accepted',
    },
];

const CellStyled = styled(Box)({
    height: '24px',
    minWidth: '22px',
    lineHeight: 0,
    borderRadius: '6px',
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    padding: '0px 8px',
    color: 'rgb(183, 29, 24)',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'capitalize',
});

const data = [
    {
        num: 1,
        name: 'Tien Anh',
        time: '27-01-2023 00:00:00',
        type: 'Door open',
        status: 'Accepted',
    },
    {
        num: 2,
        name: 'NGolo Kante',
        time: '27-01-2023 00:00:00',
        type: 'Door open',
        status: 'Accepted',
    },
    {
        num: 3,
        name: 'Anh Messi',
        time: '27-01-2023 00:00:00',
        type: 'Door open',
        status: 'Declined',
    },
    {
        num: 4,
        name: 'Anh Ri Do',
        time: '27-01-2023 00:00:00',
        type: 'Incoming Call',
        status: 'Accepted',
    },
    {
        num: 5,
        name: 'Tien Anh',
        time: '27-01-2023 00:00:00',
        type: 'Incoming Call',
        status: 'Declined',
    },
];

function Tracking() {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'num',
                header: 'No',
                size: 40,
                Cell: ({ cell, row }) => <Typography sx={{ marginLeft: '4px' }}>{cell.getValue()}</Typography>,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 250,
                fontSize: 1,
                Cell: ({ cell, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt="avatar"
                            height={30}
                            src={
                                'https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA='
                            }
                            loading="lazy"
                            style={{ borderRadius: '50%' }}
                        />
                        <Typography
                            sx={{
                                fontWeight: '500',
                            }}
                        >
                            {cell.getValue()}
                        </Typography>
                    </Box>
                ),
            },
            {
                accessorKey: 'time', //normal accessorKey
                header: 'Time',
                size: 250,
            },
            {
                accessorKey: 'type',
                header: 'Type',
                size: 200,
                Cell: ({ cell }) => (
                    <CellStyled
                        sx={() =>
                            cell.getValue() === 'Incoming Call'
                                ? {
                                      backgroundColor: 'primary.light',
                                      color: 'primary.dark',
                                  }
                                : {
                                      backgroundColor: 'warning.light',
                                      color: 'warning.dark',
                                  }
                        }
                    >
                        {cell.getValue()}
                    </CellStyled>
                ),
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 40,
                Cell: ({ cell }) => (
                    // <Box
                    //     sx={() => ({
                    //         backgroundColor: cell.getValue() === 'Accepted' ? 'success.main' : 'error.main',
                    //         borderRadius: '0.25rem',
                    //         color: '#fff',
                    //         maxWidth: '150px',
                    //         p: '0.25rem',
                    //         textAlign: 'center',
                    //     })}
                    // >
                    //     {cell.getValue()}
                    // </Box>
                    <Box
                        sx={() => ({
                            paddingLeft: '14px',
                        })}
                    >
                        {cell.getValue() === 'Accepted' ? (
                            <CheckCircleIcon color="success" />
                        ) : (
                            <CancelIcon color="error" />
                        )}
                    </Box>
                ),
            },
        ],
        [],
    );

    const { startLoading, endLoading } = useLoading();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = async () => {
        await startLoading();
        setTimeout(() => {
            endLoading();
            enqueueSnackbar('This is a success message!', {
                variant: 'success',
                action: (key) => <CustomCloseButton onClick={() => closeSnackbar(key)}></CustomCloseButton>,
            });
        }, 3000);
    };

    return (
        <Layout>
            <h1>Tracking</h1>
            {/* <Box className={cx('form')}> */}
            <StyledPaper sx={{ width: '100%', margin: '20px 0 40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Start Date" renderInput={(params) => <TextField {...params} />} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={3}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="End Date" renderInput={(params) => <TextField {...params} />} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField id="outlined-select-currency" select label="Type" variant="outlined">
                            {typeOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField id="outlined-select-currency" select label="Status" variant="outlined">
                            {statusOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                <Box className={cx('btns')}>
                    <Button className={cx('reset-btn')} variant="contained" color="secondary">
                        Reset
                    </Button>
                    <Button
                        className={cx('search-btn')}
                        startIcon={<SearchIcon />}
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        Search
                    </Button>
                </Box>
            </StyledPaper>
            {/* </Box> */}
            <div className={cx('tracking-table')}>
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableTopToolbar={false}
                    enableColumnActions={false}
                    enableColumnFilters={false}
                />
            </div>
        </Layout>
    );
}

export default Tracking;
