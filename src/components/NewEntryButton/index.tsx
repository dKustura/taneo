import { Button } from '@mui/material';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';

type Props = {
  readonly onClick: () => unknown;
};

const NewEntryButton = ({ onClick }: Props) => {
  return (
    <Button fullWidth variant="contained" onClick={onClick} startIcon={<AddCircleIcon />}>
      New entry
    </Button>
  );
};

export default NewEntryButton;
