import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

const FETCH_ONCE = {
  staleTime: Infinity,
  cacheTime: Infinity,
};

const TOAST_ERROR = {
  onError: (error: AxiosError) => toast.error(`Something went wrong: ${error.message}`),
};

const RETRY_ONCE = {
  retry: 1,
};

export const DefaultQueryOptions = {
  ...FETCH_ONCE,
  ...RETRY_ONCE,
  ...TOAST_ERROR,
};

export const QueryOptions = {
  FETCH_ONCE,
  RETRY_ONCE,
  TOAST_ERROR,
};
