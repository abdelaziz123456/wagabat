let mainSrc = '../../assets/icons/';

interface IconsSource {
  [key: string]: any;
}
export const iconsSource: IconsSource = {
  home: require(`${mainSrc}home.png`),
  homeActive: require(`${mainSrc}homeActive.png`),
  discover: require(`${mainSrc}discover.png`),
  discoverActive: require(`${mainSrc}discoverActive.png`),
  delivery: require(`${mainSrc}car.png`),
  deliveryActive: require(`${mainSrc}carActive.png`),
  orders: require(`${mainSrc}orders.png`),
  ordersActive: require(`${mainSrc}ordersActive.png`),
  profile: require(`${mainSrc}user.png`),
  profileActive: require(`${mainSrc}userActive.png`),
};
