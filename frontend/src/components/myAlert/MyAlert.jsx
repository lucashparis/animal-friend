import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function MyAlert(props) {
    const typeOfAlert = props.title.toLowerCase();

    return (
        <Stack className="flex flex-row justify-end" spacing={2}>
            <Alert className="w-1/3 absolute" severity={typeOfAlert}>
                <AlertTitle><strong> { props.title ? props.title : 'Error' }</strong></AlertTitle>
                {props.message}
            </Alert>
        </Stack>
    );
}

export { MyAlert };