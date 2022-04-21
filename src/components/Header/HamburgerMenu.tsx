import { useState } from 'react';

import {
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { AppRoutes } from 'helpers/constants';
import styles from './styles';

const HamburgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {AppRoutes.map((route) => (
          <Link key={route.title} href={route.path} sx={styles.menuItem}>
            <MenuItem onClick={onClose}>
              {route.icon && (
                <ListItemIcon>
                  <route.icon />
                </ListItemIcon>
              )}
              <Typography textAlign="center">{route.title}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default HamburgerMenu;
