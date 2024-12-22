export const useFetchAPI = (request, opts) => {
  const config = useRuntimeConfig();
  return useFetch(request, { baseURL: config.public.baseApiUrl, ...opts })
}