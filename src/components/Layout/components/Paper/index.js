import { Paper, styled } from '@mui/material';

export const StyledPaper = styled(Paper)({
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(33, 43, 54)',
    transition: ' box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundImage: 'none',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
    borderRadius: '16px',
    zIndex: 0,
    padding: '24px',
});
