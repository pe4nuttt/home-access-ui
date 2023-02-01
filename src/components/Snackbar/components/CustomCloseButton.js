import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

function CustomCloseButton({ onClick }) {
    return (
        <IconButton
            sx={{
                color: '#fff',
            }}
            onClick={onClick}
        >
            <CloseIcon></CloseIcon>
        </IconButton>
    );
}

export default CustomCloseButton;
