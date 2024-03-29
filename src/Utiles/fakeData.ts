import {Images} from '@assets';
import {ProductItemType, ReserveItemType} from './types';
import {DeliveryItemType} from './props';

export const restaurantsAndCafes = [
  {
    id: 1,
    type: 'cafe',
    name: 'Cafe Supreme',
    phoneNumber: '+1234567890',
    address: '123 Main St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest1.jpg'),
    openAt: '19:00',
    closeAt: '18:00',
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    type: 'restaurant',
    name: 'Pizza Hut',
    phoneNumber: '+9876543210',
    address: '456 Elm St, Townsville, Country',
    imageLink: require('../assets/images/restaurants/rest2.jpg'),
    openAt: '11:00',
    closeAt: '16:00',
    region: {
      latitude: 37.789,
      longitude: -122.434,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.792,
      longitude: -122.431,
    },
  },
  {
    id: 3,
    type: 'cafe',
    name: 'Burger Bistro',
    phoneNumber: '+1122334455',
    address: '789 Oak St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest3.jpg'),
    openAt: '06:00',
    closeAt: '02:00',
    region: {
      latitude: 37.7895,
      longitude: -122.433,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.79,
      longitude: -122.436,
    },
  },
  {
    id: 4,
    type: 'restaurant',
    name: 'Pasta Palace',
    phoneNumber: '+9988776655',
    address: '246 Maple St, Hamletown, Country',
    imageLink: require('../assets/images/restaurants/rest4.jpg'),
    openAt: '05:00',
    closeAt: '01:00',
    region: {
      latitude: 37.7888,
      longitude: -122.431,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.791,
      longitude: -122.434,
    },
  },
  {
    id: 5,
    type: 'restaurant',
    name: 'Sushi Bar',
    phoneNumber: '+5544332211',
    address: '135 Pine St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest5.jpg'),
    openAt: '06:00',
    closeAt: '22:00',
    region: {
      latitude: 37.787,
      longitude: -122.435,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.789,
      longitude: -122.432,
    },
  },
  {
    id: 6,
    type: 'cafe',
    name: 'Coffee Corner',
    phoneNumber: '+4433221100',
    address: '567 Walnut St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest6.jpg'),
    openAt: '22:00',
    closeAt: '19:00',
    region: {
      latitude: 37.786,
      longitude: -122.436,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.79,
      longitude: -122.435,
    },
  },
  {
    id: 7,
    type: 'restaurant',
    name: 'Steakhouse Grill',
    phoneNumber: '+1122003344',
    address: '890 Cedar St, Townsville, Country',
    imageLink: require('../assets/images/restaurants/rest7.jpg'),
    openAt: '03:00',
    closeAt: '11:00',
    region: {
      latitude: 37.787,
      longitude: -122.434,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.788,
      longitude: -122.436,
    },
  },
  {
    id: 8,
    type: 'cafe',
    name: 'Taco Time',
    phoneNumber: '+9988776655',
    address: '579 Oak St, Hamletown, Country',
    imageLink: require('../assets/images/restaurants/rest8.jpg'),
    openAt: '04:00',
    closeAt: '16:00',
    region: {
      latitude: 37.786,
      longitude: -122.431,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.789,
      longitude: -122.434,
    },
  },
  {
    id: 9,
    type: 'restaurant',
    name: 'Ice Cream Paradise',
    phoneNumber: '+5544332211',
    address: '124 Pine St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest9.jpg'),
    openAt: '05:00',
    closeAt: '05:00',
  },
  {
    id: 10,
    type: 'cafe',
    name: 'Bakery Delights',
    phoneNumber: '+4433221100',
    address: '356 Maple St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest10.jpg'),
    openAt: '20:00',
    closeAt: '15:00',
    region: {
      latitude: 37.787,
      longitude: -122.434,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.79,
      longitude: -122.432,
    },
  },
  {
    id: 11,
    type: 'cafe',
    name: 'Cafe Supreme',
    phoneNumber: '+1234567890',
    address: '123 Main St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest1.jpg'),
    openAt: '19:00',
    closeAt: '18:00',
    region: {
      latitude: 37.789,
      longitude: -122.432,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.787,
      longitude: -122.436,
    },
  },
  {
    id: 12,
    type: 'restaurant',
    name: 'Pizza Hut',
    phoneNumber: '+9876543210',
    address: '456 Elm St, Townsville, Country',
    imageLink: require('../assets/images/restaurants/rest2.jpg'),
    openAt: '11:00',
    closeAt: '16:00',
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.791,
      longitude: -122.43,
    },
  },
  {
    id: 13,
    type: 'cafe',
    name: 'Burger Bistro',
    phoneNumber: '+1122334455',
    address: '789 Oak St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest3.jpg'),
    openAt: '06:00',
    closeAt: '02:00',
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.791,
      longitude: -122.43,
    },
  },
  {
    id: 14,
    type: 'restaurant',
    name: 'Pasta Palace',
    phoneNumber: '+9988776655',
    address: '246 Maple St, Hamletown, Country',
    imageLink: require('../assets/images/restaurants/rest4.jpg'),
    openAt: '05:00',
    closeAt: '01:00',
    region: {
      latitude: 37.789,
      longitude: -122.434,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.792,
      longitude: -122.431,
    },
  },
  {
    id: 15,
    type: 'restaurant',
    name: 'Sushi Bar',
    phoneNumber: '+5544332211',
    address: '135 Pine St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest5.jpg'),
    openAt: '06:00',
    closeAt: '22:00',
    region: {
      latitude: 37.7895,
      longitude: -122.433,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.79,
      longitude: -122.436,
    },
  },
  {
    id: 16,
    type: 'cafe',
    name: 'Coffee Corner',
    phoneNumber: '+4433221100',
    address: '567 Walnut St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest6.jpg'),
    openAt: '22:00',
    closeAt: '19:00',
    region: {
      latitude: 37.7888,
      longitude: -122.431,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.791,
      longitude: -122.434,
    },
  },
  {
    id: 17,
    type: 'restaurant',
    name: 'Steakhouse Grill',
    phoneNumber: '+1122003344',
    address: '890 Cedar St, Townsville, Country',
    imageLink: require('../assets/images/restaurants/rest7.jpg'),
    openAt: '03:00',
    closeAt: '11:00',
    region: {
      latitude: 37.787,
      longitude: -122.435,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.789,
      longitude: -122.432,
    },
  },
  {
    id: 18,
    type: 'cafe',
    name: 'Taco Time',
    phoneNumber: '+9988776655',
    address: '579 Oak St, Hamletown, Country',
    imageLink: require('../assets/images/restaurants/rest8.jpg'),
    openAt: '04:00',
    closeAt: '16:00',
    region: {
      latitude: 37.786,
      longitude: -122.436,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.79,
      longitude: -122.435,
    },
  },
  {
    id: 19,
    type: 'restaurant',
    name: 'Ice Cream Paradise',
    phoneNumber: '+5544332211',
    address: '124 Pine St, Cityville, Country',
    imageLink: require('../assets/images/restaurants/rest9.jpg'),
    openAt: '05:00',
    closeAt: '05:00',
    region: {
      latitude: 37.786,
      longitude: -122.431,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.789,
      longitude: -122.434,
    },
  },
  {
    id: 20,
    type: 'cafe',
    name: 'Bakery Delights',
    phoneNumber: '+4433221100',
    address: '356 Maple St, Villageland, Country',
    imageLink: require('../assets/images/restaurants/rest10.jpg'),
    openAt: '20:00',
    closeAt: '15:00',
    region: {
      latitude: 37.789,
      longitude: -122.432,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
    coordinate: {
      latitude: 37.787,
      longitude: -122.436,
    },
  },
];

export const products: ProductItemType[] = [
  {
    id: '247-96024',
    name: 'Pizza',
    price: 100,
    image: Images.products.pizza,
    categoryId: 6,
    description: 'Delicious pizza topped with various ingredients.',
    cover:
      'https://img.freepik.com/premium-photo/close-up-view-baked-homemade-piza-rustic-pizza-home-made-food-tasty-pizza-with-vegetables-basil_87555-10790.jpg?w=2000',
  },
  {
    id: '123-31424',
    name: 'Pure black',
    price: 120,
    image: Images.products.PureBlack,
    categoryId: 2,
    description: 'Strong and bold black coffee.',
    cover:
      'https://img.freepik.com/premium-photo/close-up-view-baked-homemade-piza-rustic-pizza-home-made-food-tasty-pizza-with-vegetables-basil_87555-10790.jpg?w=2000',
  },
  {
    id: '417-02324',
    name: 'Latte',
    price: 450,
    image: Images.products.latte,
    categoryId: 2,
    description: 'Creamy and frothy espresso-based drink.',
    cover:
      'https://www.allrecipes.com/thmb/Wh0Qnynwdxok4oN0NZ1Lz-wl0A8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9428203-9d140a4ed1424824a7ddd358e6161473.jpg',
  },
  {
    id: '097-23424',
    name: 'Arabica',
    price: 320,
    image: Images.products.arabica,
    categoryId: 2,
    description: 'Rich and aromatic Arabica coffee.',
    cover:
      'https://hips.hearstapps.com/hmg-prod/images/cup-of-coffee-royalty-free-image-1581611460.jpg?crop=0.668xw:1.00xh;0.0680xw,0&resize=1200:*',
  },
  {
    id: '123-34324',
    name: 'Burger',
    price: 370,
    image: Images.products.burger,
    categoryId: 8,
    description: 'Juicy and flavorful burger with various toppings.',
    cover:
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
  },
  {
    id: '564-33224',
    name: 'Capuccino',
    price: 210,
    image: Images.products.capuccino,
    categoryId: 2,
    description: 'Classic Italian coffee with steamed milk foam.',
    cover:
      'https://a-static.mlcdn.com.br/450x450/taca-de-capuccino-cafe-chocolate-xicara-1-peca-fratelli/casabr/99755898dc0411ebb1e14201ac18500e/cdad2b09038dd14749051c9db54872fb.jpeg',
  },
  {
    id: '009-34324',
    name: 'Rebusta',
    price: 190,
    image: Images.products.rebusta,
    categoryId: 3,
    description: 'Blend of Robusta coffee beans with strong flavor.',
    cover:
      'https://pristineorganics.com/wp-content/uploads/2020/01/Front-4.jpg',
  },
  {
    id: '039-32124',
    name: 'Samosa',
    price: 120,
    image: Images.products.samosa,
    categoryId: 7,
    description:
      'Crispy and savory Indian snack filled with potatoes and spices.',
    cover:
      'https://www.sainsburysmagazine.co.uk/uploads/media/720x770/06/12266-samosas.jpg?v=1-0',
  },
  {
    id: '111-32124',
    name: 'Namkeen',
    price: 190,
    image: Images.products.namkeen,
    categoryId: 7,
    description: 'Assorted Indian savory snacks with different flavors.',
    cover: 'https://5.imimg.com/data5/LL/XG/MY-23223301/namkeens-500x500.jpg',
  },
  {
    id: '219-32124',
    name: 'Danish',
    price: 250,
    image: Images.products.truffle,
    categoryId: 5,
    description: 'Delicious pastry with flaky layers and sweet filling.',
    cover:
      'https://3brothersbakery.com/wp-content/uploads/2018/05/CheeseDanish_01-scaled.jpg',
  },
  {
    id: '039-32121',
    name: 'Truffle',
    price: 430,
    image: Images.products.danish,
    categoryId: 5,
    description: 'Decadent chocolate truffle dessert.',
    cover:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Glazed_apple_Danish.jpg/1200px-Glazed_apple_Danish.jpg',
  },
  {
    id: '031-32121',
    name: 'Tea',
    price: 110,
    image: Images.products.tea,
    categoryId: 4,
    description: 'Refreshing and aromatic tea beverage.',
    cover:
      'https://cdn.shopify.com/s/files/1/0560/1699/4381/articles/BC_2B-_2BAssam_2B_28cup_29_2B_281055_29.jpg?v=1664455870',
  },
  {
    id: '039-34121',
    name: 'Green Tea',
    price: 130,
    image: Images.products.greenTea,
    categoryId: 4,
    description: 'Healthy and antioxidant-rich green tea.',
    cover:
      'https://hips.hearstapps.com/hmg-prod/images/green-tea-wight-loss-1643990040.jpg?crop=0.665xw:1.00xh;0.291xw,0&resize=1200:*',
  },
  // Add more products with descriptions
];

export const DeliveryOrdersData: DeliveryItemType[] = [
  {
    id: '039-32121',
    status: 'Preparing',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 3},
    ],
    totalCost: 424,
    date: '20/04/2020, 04:20',
    type: 'delivery',
  },
  {
    id: '129-32121',
    status: 'Delivering',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 3, note: ''},
    ],
    totalCost: 322,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
  {
    id: '030-33321',
    status: 'Preparing',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 3, note: ''},
    ],
    totalCost: 344,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
  {
    id: '666-32321',
    status: 'Delivering',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 3, note: ''},
    ],
    totalCost: 876,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
];
export const StorePickupData: DeliveryItemType[] = [
  {
    id: '129-32121',
    status: 'Order received',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '10:00, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 6},
    ],
    totalCost: 543,
    date: '20/04/2020, 04:20',
    type: 'storePickup',
  },
  {
    id: '231-23021',
    status: 'Ready for pickup',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '12:30, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 4, note: ''},
    ],
    totalCost: 213,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
  {
    id: '111-32021',
    status: 'Order received',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '05:30, Today',
    orders: [
      {name: 'Capuccino', number: 4, note: 'Smoky'},
      {name: 'hamburger', number: 2, note: ''},
    ],
    totalCost: 431,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
  {
    id: '231-23121',
    status: 'Ready for pickup',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '16:30, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 7, note: ''},
    ],
    totalCost: 770,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
];

export const OrdersHistoryData: DeliveryItemType[] = [
  {
    id: '111-31121',
    status: 'Delivered',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 3, note: 'Smoky'},
      {name: 'hamburger', number: 3, note: ''},
    ],
    totalCost: 425,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
  {
    id: '222-32221',
    status: 'Delivery failed',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 5, note: 'Smoky'},
      {name: 'hamburger', number: 2, note: ''},
    ],
    totalCost: 323,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
  {
    id: '039-32121',
    status: 'Delivered',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 5, note: 'Smoky'},
      {name: 'hamburger', number: 2, note: ''},
    ],
    totalCost: 432,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
  {
    id: '123-32323',
    status: 'Delivery failed',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    toAddress: '285 CMT8, D.10, HCM city',
    orders: [
      {name: 'Capuccino', number: 4, note: 'Smoky'},
      {name: 'hamburger', number: 1, note: ''},
    ],
    totalCost: 344,
    date: '20/04/2020, 06:20',
    type: 'delivery',
  },
];

export const StorePickupHistoryData: DeliveryItemType[] = [
  {
    id: '039-32121',
    status: 'Order completed',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '10:00, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 6},
    ],
    totalCost: 543,
    date: '20/04/2020, 04:20',
    type: 'storePickup',
  },
  {
    id: '111-23121',
    status: 'Order completed',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '12:30, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 4, note: ''},
    ],
    totalCost: 213,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
  {
    id: '022-32821',
    status: 'Order completed',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '05:30, Today',
    orders: [
      {name: 'Capuccino', number: 4, note: 'Smoky'},
      {name: 'hamburger', number: 2, note: ''},
    ],
    totalCost: 431,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
  {
    id: '231-32221',
    status: 'Ready for pickup',
    fromAddress: '13 Han Thuyen, D.1, HCM city',
    pickupTime: '16:30, Today',
    orders: [
      {name: 'Capuccino', number: 1, note: 'Smoky'},
      {name: 'hamburger', number: 7, note: ''},
    ],
    totalCost: 770,
    date: '20/04/2020, 06:20',
    type: 'storePickup',
  },
];

export const ReservationsData: ReserveItemType[] = [
  {
    id: 1,
    address: 'SB CMT8',
    no: 2,
    time: 'Today 14/02, 13:00',
    status: 'Reserved',
  },
  {
    id: 2,
    address: 'SB Han Thuyen',
    no: 4,
    time: 'Sun 13/02, 18:00',
    status: 'Past',
  },
  {
    id: 3,
    address: 'SB Han Thuyen',
    no: 2,
    time: 'Sun 10/04, 18:00',
    status: 'Canceled',
  },
  {
    id: 4,
    address: 'SB CMT8',
    no: 2,
    time: 'Today 14/02, 13:00',
    status: 'Reserved',
  },
  {
    id: 5,
    address: 'SB Han Thuyen',
    no: 4,
    time: 'Sun 13/02, 18:00',
    status: 'Past',
  },
  {
    id: 6,
    address: 'SB Han Thuyen',
    no: 2,
    time: 'Sun 10/04, 18:00',
    status: 'Canceled',
  },
];
