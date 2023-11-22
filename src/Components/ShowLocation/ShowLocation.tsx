import React, {useRef} from 'react';
import styles from './styles';
import {CardBase, CustomButton} from '@SharedComponents/index';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Images} from '@assets/index';
import {Image, Linking, Platform, Text, View} from 'react-native';

type Props = {
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
  customLabel: string;
};
const ShowLocation = ({region, coordinate, customLabel}: Props) => {
  const mapRef = useRef(null);
  const mapStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});

  const latLng = `${coordinate.latitude},${coordinate.longitude}`;
  const label = customLabel;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });
  const openInMaps = () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <CardBase customStyle={styles.mainContainer}>
      <MapView
        style={{flex: 1, height: 400}}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={region}
        ref={mapRef}
        customMapStyle={mapStyles}>
        <Marker coordinate={coordinate}>
          <Image source={Images.icons.marker} style={{width: 40, height: 40}} />
        </Marker>
      </MapView>
      <View style={styles.mapControl}>
        <CustomButton
          pressHandler={() => {
            mapRef?.current?.animateToRegion(region);
          }}
          btnTheme="outlined">
          <Text style={styles.controlText}>Return to location</Text>
        </CustomButton>
        <CustomButton pressHandler={openInMaps} btnTheme="outlined">
          <Text style={styles.controlText}>Open In Maps</Text>
        </CustomButton>
      </View>
    </CardBase>
  );
};

export default ShowLocation;
