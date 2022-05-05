import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';

import UnderlinedLink from 'components/UnderlinedLink';
import ThemeToggle from 'components/ThemeToggle';
import HamburgerMenu from './HamburgerMenu';

import { AppRoutes, APP_NAME } from 'helpers/constants';
import styles from './styles';

const Header = () => {
  return (
    <>
      <AppBar position="sticky" enableColorOnDark={false}>
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
                    <UnderlinedLink to={route.path}>{route.title}</UnderlinedLink>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <ThemeToggle />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
