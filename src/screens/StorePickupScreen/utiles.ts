import {Images} from '@assets';

export const tabItems = [
  {id: 1, title: 'Favourite'},
  {id: 2, title: 'Coffee'}, //
  {id: 3, title: 'Milk Tea'}, //
  {id: 4, title: 'Tea'},
  {id: 5, title: 'Bakery'}, //
  {id: 6, title: 'Pizza'}, //
  {id: 7, title: 'Snacks'}, //
  {id: 8, title: 'Burger'}, //
];

export const products = [
  {
    id: 1,
    name: 'Pizza',
    price: 100,
    image: Images.products.pizza,
    categoryId: 6,
  },
  {
    id: 2,
    name: 'Pure black',
    price: 120,
    image: Images.products.PureBlack,
    categoryId: 2,
  },
  {
    id: 3,
    name: 'Latte',
    price: 450,
    image: Images.products.latte,
    categoryId: 2,
  },
  {
    id: 4,
    name: 'Arabica',
    price: 320,
    image: Images.products.arabica,
    categoryId: 2,
  },
  {
    id: 5,
    name: 'Burger',
    price: 370,
    image: Images.products.burger,
    categoryId: 8,
  },
  {
    id: 6,
    name: 'capuccino',
    price: 210,
    image: Images.products.capuccino,
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Rebusta',
    price: 190,
    image: Images.products.rebusta,
    categoryId: 3,
  },
  {
    id: 8,
    name: 'Samosa',
    price: 120,
    image: Images.products.samosa,
    categoryId: 7,
  },
  {
    id: 9,
    name: 'Namkeen',
    price: 190,
    image: Images.products.namkeen,
    categoryId: 7,
  },
  {
    id: 10,
    name: 'Danish',
    price: 250,
    image: Images.products.truffle,
    categoryId: 5,
  },
  {
    id: 11,
    name: 'Truffle',
    price: 430,
    image: Images.products.danish,
    categoryId: 5,
  },
  {
    id: 12,
    name: 'Tea',
    price: 110,
    image: Images.products.tea,
    categoryId: 4,
  },

  {
    id: 13,
    name: 'Green Tea',
    price: 130,
    image: Images.products.greenTea,
    categoryId: 4,
  },
];
