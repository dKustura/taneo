import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';

import { AppRoutes, APP_NAME } from 'helpers/constants';
import styles from './styles';
import UnderlinedLink from 'components/UnderlinedLink';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <HamburgerMenu />
            </Box>

            <Typography variant="h2" noWrap component="div" sx={styles.appName}>
              {APP_NAME}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Grid container spacing={3} alignItems="center">
                {AppRoutes.map((route) => (
                  <Grid item key={route.title}>
                    <UnderlinedLink to={route.path}>
                      {route.title}
                    </UnderlinedLink>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
