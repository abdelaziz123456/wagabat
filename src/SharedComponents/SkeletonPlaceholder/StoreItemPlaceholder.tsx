import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const StoreItemPlaceholder = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 8,
        marginHorizontal: 10,
        paddingVertical: 5,
      }}>
      <SkeletonPlaceholder>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
          }}>
          <SkeletonPlaceholder.Item
            width={'10%'}
            height={20}
            marginVertical={10}
          />
          <View style={{marginHorizontal: 10}}>
            <SkeletonPlaceholder.Item
              width={70}
              height={10}
              marginVertical={10}
              marginRight={10}
            />

            <SkeletonPlaceholder.Item
              width={190}
              height={10}
              marginRight={10}
              marginBottom={10}
            />
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default StoreItemPlaceholder;
