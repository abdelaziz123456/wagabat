import {ProductItemType} from '@Utiles/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type Props = {
  item: ProductItemType;
};
type RootStackParamList = {
  productDetails: {
    itemId: number;
  };
};
export type ProductItemScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'productDetails'
>;
