import { axiosInstant } from "./axios.instant";

export const SwrFetcher = async (url: string) => {
  const response = await axiosInstant.get(url);
  return response.data;
};

export const SwrConfig = {
  fetcher: SwrFetcher,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 2000,
  shouldRetryOnError: true,
  errorRetryCount: 3,
  errorRetryInterval: 2000,
};
