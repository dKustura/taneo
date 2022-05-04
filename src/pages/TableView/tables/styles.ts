import { SxProps, Theme } from '@mui/material';
import colors from 'components/Theme/colors';

const smallHeaderCell: SxProps<Theme> = (theme) => ({
  color: colors.black,
});

const bigGcmHeaderCell: SxProps<Theme> = (theme) => ({
  width: '7%',
  color: colors.black,
});

const bigMonthHeaderCell: SxProps<Theme> = () => ({
  width: '10%',
  color: colors.black,
});

const styles = {
  smallHeaderCell,
  bigGcmHeaderCell,
  bigMonthHeaderCell,
};

export default styles;
