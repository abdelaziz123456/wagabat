import {ImageSourcePropType} from 'react-native/types';

export type ProductItemType = {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
  categoryId: number;
  description: string;
  cover: string;
};

export type ReserveItemType = {
  id: number;
  address: string;
  no: number;
  time: string;
  status: 'Reserved' | 'Canceled' | 'Past';
};
