import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './PromoSection.styles';
import {PromoCard} from '@SharedComponents/index';
import {CampData} from './utiles';
import LottieView from 'lottie-react-native';
import {PromocardPlaceholder} from '@SharedComponents/SkeletonPlaceholder';

export default function PromoSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  const reload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <View>
      <Pressable onPress={reload}>
        <LottieView
          source={require('@assets/animations/Reload.json')}
          style={styles.lottieView}
          loop={isLoading}
          autoPlay
        />
      </Pressable>

      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Promotion campaign</Text>
        <View style={styles.cardsContainer}>
          {CampData.map((camp, ind) =>
            isLoading ? (
              <PromocardPlaceholder key={ind} />
            ) : (
              <PromoCard
                key={ind}
                img={camp.img}
                discount={camp.discount}
                time={camp.time}
                title={camp.title}
              />
            ),
          )}
        </View>
      </View>
    </View>
  );
}
