export type SearchStoreProps = {
  setFilteredData: Function;
  filteredData: any;
  showFav: boolean;
  setShowFav: Function;
};

export type DeliveryItemType = {
  id: number;
  status: 'Preparing' | 'Delivering' | 'Delivered' | 'Delivery failed';
  fromAddress: string;
  toAddress: string;
  orders: {name: string; number: number; note?: string}[];
  totalCost: number;
  date: string;
};
