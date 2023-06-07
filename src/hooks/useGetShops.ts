import {useQuery} from 'react-query';
import {getShops} from '../services/httpClient';

const useGetShops = (onSuccessHandler: Function, onErrorhandler: Function) => {
  return useQuery({
    queryKey: ['shops'],
    queryFn: () => getShops(),
    onSuccess: data => {
      onSuccessHandler(data);
    },
    onError: error => {
      onErrorhandler(error);
    },
    enabled: true,
  });

  //   return query;
};

export default useGetShops;
