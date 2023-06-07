import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Button, Text} from 'react-native';

const Orders = () => {
  const [isVisible, setIsVisible] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const hideElement = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Animation duration in milliseconds
      easing:,    useNativeDriver: true, // Enable native driver for better performance
    }).start(() => {
      setIsVisible(false);
    });
  };

  const showElement = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Animation duration in milliseconds
      useNativeDriver: true, // Enable native driver for better performance
    }).start(() => {
      setIsVisible(true);
    });
  };

  return (
    <View>
      {isVisible && (
        <Animated.View style={{opacity: fadeAnim}}>
          <Text>My Element</Text>
          {/* Your element to hide */}
          {/* Example: */}
          {/* <Text>This element will be hidden with animation.</Text> */}
        </Animated.View>
      )}

      {/* Button to trigger the animation */}
      <Button
        title={isVisible ? 'Hide Element' : 'show element'}
        onPress={isVisible ? hideElement : showElement}
      />
    </View>
  );
};

export default Orders;
