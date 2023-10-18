export type SearchStoreProps = {
  setFilteredData: Function;
  filteredData: any;
  showFav: boolean;
  setShowFav: Function;
};

export type DeliveryItemType = {
  id: number;
  status:
    | 'Preparing'
    | 'Delivering'
    | 'Delivered'
    | 'Delivery failed'
    | 'Order received'
    | 'Ready for pickup'
    | 'Order completed';
  fromAddress: string;
  toAddress?: string;
  pickupTime?: string;
  orders: {name: string; number: number; note?: string}[];
  totalCost: number;
  date: string;
  type: 'storePickup' | 'delivery';
};
