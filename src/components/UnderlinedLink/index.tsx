import { PropsWithChildren } from 'react';
import { Link, TypographyProps } from '@mui/material';

import { Variant } from '@mui/material/styles/createTypography';
import styles from './styles';

type ColorType = TypographyProps['color'];

type Props = {
  readonly to: string;
  readonly variant?: Variant;
  readonly isExternal?: boolean;
  readonly color?: ColorType;
};

const UnderlinedLink = ({
  to,
  children,
  variant = 'h6',
  color = 'inherit',
}: PropsWithChildren<Props>) => {
  return (
    <Link
      variant={variant}
      underline="none"
      color={color}
      sx={styles.link}
      href={to}
    >
      {children}
    </Link>
  );
};

export default UnderlinedLink;
