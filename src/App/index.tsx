import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Table from 'pages/Table';
import Chart from 'pages/Chart';
import NotFound from 'pages/NotFound';

import { getTheme } from 'components/Theme';
import Header from 'components/Header';
import Filter from 'components/Filter';

import { RoutePaths } from 'helpers/constants';
import useThemeMode from 'hooks/useThemeMode';
import useFilterData from './useFilterData';

const queryClient = new QueryClient();

function App() {
  const [theme] = useThemeMode();
  const { filterData, onChangeHandlers } = useFilterData();

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <QueryClientProvider client={queryClient}>
        <div>
          <CssBaseline />

          <Header />
          <Container maxWidth="xl" sx={{ p: 4 }}>
            <Filter data={filterData} onChangeHandlers={onChangeHandlers} />

            <Routes>
              <Route
                path={RoutePaths.TABLE}
                element={<Table filter={filterData} />}
              />
              <Route path={RoutePaths.CHART} element={<Chart />} />

              <Route path="/" element={<Navigate to={RoutePaths.TABLE} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
        <ToastContainer limit={3} position="bottom-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
