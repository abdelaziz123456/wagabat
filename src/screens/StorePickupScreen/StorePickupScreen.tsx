import {View, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './StorePickupScreen.styles';

import {ScreenHeader} from '@Components/index';
import {Images} from '@assets';
import {products, tabItems} from './utiles';
import {ProductItem, TabItem} from '@SharedComponents/index';
export default function StorePickupScreen() {
  const [activeTab, setActiveTab] = useState(1);
  let selectedItems = products.filter(prod => prod.categoryId == activeTab);

  return (
    <View style={styles.mainContainer}>
      <ScreenHeader
        imageSource={Images.icons.backButton}
        title={'Store pickup'}
      />
      <View style={styles.content}>
        <View style={styles.tab}>
          {tabItems.map((item, index) => (
            <TabItem
              key={index}
              title={item.title}
              activeTab={activeTab}
              id={item.id}
              setActiveTAb={setActiveTab}
            />
          ))}
        </View>

        <View style={styles.productList}>
          <FlatList
            data={selectedItems}
            renderItem={({item}) => <ProductItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
